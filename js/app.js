// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Check URL parameters for category / subcategory filter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && categories.find(c => c.id === categoryParam)) {
        updateFilter('category', categoryParam);

        const subcategoryParam = urlParams.get('subcategory');
        const catSubs = subcategories[categoryParam] || [];
        if (subcategoryParam && catSubs.find(s => s.id === subcategoryParam)) {
            updateFilter('subcategory', subcategoryParam);
        }
    }

    renderCategories();
    renderFilters();
    renderCourses();
    setupEventListeners();
}

// Render sidebar categories (with nested subcategories under the active one)
function renderCategories() {
    const sidebar = document.getElementById('categories-list');
    if (!sidebar) return;

    sidebar.innerHTML = categories.map(cat => {
        const isActive = filterState.category === cat.id;
        const subs = subcategories[cat.id];
        const showSubs = isActive && subs && subs.length > 0;

        const subsHtml = showSubs ? `
            <div class="mt-1 ml-3 pl-3 border-l border-emerald-200 space-y-1">
                <button
                    class="subcategory-btn w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-150 ${filterState.subcategory === 'tutti' ? 'text-emerald-700 font-semibold' : 'text-gray-600 hover:text-emerald-700 hover:bg-gray-100'}"
                    data-subcategory="tutti"
                >
                    Tutte le sottocategorie
                </button>
                ${subs.map(sub => `
                    <button
                        class="subcategory-btn w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-150 ${filterState.subcategory === sub.id ? 'bg-emerald-50 text-emerald-700 font-semibold' : 'text-gray-600 hover:text-emerald-700 hover:bg-gray-100'}"
                        data-subcategory="${sub.id}"
                    >
                        ${sub.name}
                    </button>
                `).join('')}
            </div>
        ` : '';

        return `
            <div>
                <button
                    class="category-btn w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-emerald-100 text-emerald-700 font-semibold' : 'hover:bg-gray-100 text-gray-700'}"
                    data-category="${cat.id}"
                >
                    ${cat.name}
                </button>
                ${subsHtml}
            </div>
        `;
    }).join('');
}

// Render filter dropdowns
function renderFilters() {
    // Sort dropdown
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.innerHTML = sortOptions.map(opt =>
            `<option value="${opt.id}" ${filterState.sort === opt.id ? 'selected' : ''}>${opt.name}</option>`
        ).join('');
    }

    // Level dropdown
    const levelSelect = document.getElementById('level-select');
    if (levelSelect) {
        levelSelect.innerHTML = levels.map(lvl =>
            `<option value="${lvl.id}" ${filterState.level === lvl.id ? 'selected' : ''}>${lvl.name}</option>`
        ).join('');
    }

    // Duration dropdown
    const durationSelect = document.getElementById('duration-select');
    if (durationSelect) {
        durationSelect.innerHTML = durationRanges.map(dur =>
            `<option value="${dur.id}" ${filterState.duration === dur.id ? 'selected' : ''}>${dur.name}</option>`
        ).join('');
    }

    // Price range
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    if (priceMin) priceMin.value = filterState.priceMin;
    if (priceMax) priceMax.value = filterState.priceMax;
}

// Render courses grid
function renderCourses() {
    const grid = document.getElementById('courses-grid');
    const countEl = document.getElementById('courses-count');
    if (!grid) return;

    const filteredCourses = applyFilters(courses);

    if (countEl) {
        countEl.textContent = `${filteredCourses.length} cors${filteredCourses.length === 1 ? 'o' : 'i'} trovati`;
    }

    if (filteredCourses.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
                <svg class="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-lg font-medium">Nessun corso trovato</p>
                <p class="text-sm">Prova a modificare i filtri di ricerca</p>
                <button onclick="handleResetFilters()" class="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Resetta filtri
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredCourses.map(course => createCourseCard(course)).join('');
}

// Create course card HTML
function createCourseCard(course) {
    const levelColors = {
        principiante: 'bg-green-100 text-green-800',
        intermedio: 'bg-yellow-100 text-yellow-800',
        avanzato: 'bg-red-100 text-red-800'
    };

    const levelNames = {
        principiante: 'Principiante',
        intermedio: 'Intermedio',
        avanzato: 'Avanzato'
    };

    const stars = generateStars(course.rating);

    return `
        <a href="course.html?id=${course.id}" class="block">
            <article class="course-card bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer h-full">
                <div class="relative overflow-hidden">
                    <img
                        src="${course.image}"
                        alt="${course.title}"
                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onerror="this.src='https://via.placeholder.com/400x250/e2e8f0/64748b?text=Corso'"
                    >
                    <span class="absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full ${levelColors[course.level]}">
                        ${levelNames[course.level]}
                    </span>
                    <button type="button" class="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100" onclick="event.preventDefault(); event.stopPropagation();">
                        <svg class="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        ${course.title}
                    </h3>
                    <p class="text-sm text-gray-500 mb-2">${course.instructor}</p>
                    <div class="flex items-center gap-2 mb-2">
                        <div class="flex items-center text-yellow-400">
                            ${stars}
                        </div>
                        <span class="text-sm font-medium text-gray-700">${course.rating}</span>
                        <span class="text-sm text-gray-400">(${course.reviews.toLocaleString('it-IT')})</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-gray-900">€${course.price.toFixed(2)}</span>
                        <span class="text-sm text-gray-500 flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            ${course.duration}h
                        </span>
                    </div>
                </div>
            </article>
        </a>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHtml = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    // Half star
    if (hasHalfStar) {
        starsHtml += '<svg class="w-4 h-4" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#D1D5DB"/></linearGradient></defs><path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }

    return starsHtml;
}

// Setup event listeners
function setupEventListeners() {
    // Category + subcategory buttons (delegated)
    document.getElementById('categories-list')?.addEventListener('click', (e) => {
        const subBtn = e.target.closest('.subcategory-btn');
        if (subBtn) {
            updateFilter('subcategory', subBtn.dataset.subcategory);
            renderCategories();
            renderCourses();
            return;
        }

        const btn = e.target.closest('.category-btn');
        if (btn) {
            const category = btn.dataset.category;
            updateFilter('category', category);
            updateFilter('subcategory', 'tutti');
            renderCategories();
            renderCourses();
        }
    });

    // Sort select
    document.getElementById('sort-select')?.addEventListener('change', (e) => {
        updateFilter('sort', e.target.value);
        renderCourses();
    });

    // Level select
    document.getElementById('level-select')?.addEventListener('change', (e) => {
        updateFilter('level', e.target.value);
        renderCourses();
    });

    // Duration select
    document.getElementById('duration-select')?.addEventListener('change', (e) => {
        updateFilter('duration', e.target.value);
        renderCourses();
    });

    // Price range
    document.getElementById('price-min')?.addEventListener('change', (e) => {
        updateFilter('priceMin', parseInt(e.target.value) || 0);
        renderCourses();
    });

    document.getElementById('price-max')?.addEventListener('change', (e) => {
        updateFilter('priceMax', parseInt(e.target.value) || 500);
        renderCourses();
    });

    // Search input
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            updateFilter('search', e.target.value);
            renderCourses();
        }, 300);
    });

    // Mobile sidebar toggle
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        sidebar?.classList.toggle('-translate-x-full');
        overlay?.classList.toggle('hidden');
    });

    document.getElementById('sidebar-overlay')?.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        sidebar?.classList.add('-translate-x-full');
        overlay?.classList.add('hidden');
    });

    document.getElementById('close-sidebar')?.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        sidebar?.classList.add('-translate-x-full');
        overlay?.classList.add('hidden');
    });
}

// Handle reset filters button
function handleResetFilters() {
    resetFilters();
    renderCategories();
    renderFilters();
    renderCourses();

    // Clear search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
}
