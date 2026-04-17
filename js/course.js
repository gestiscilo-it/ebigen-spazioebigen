// Course detail page logic
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10);
    const course = courses.find(c => c.id === id);
    const container = document.getElementById('course-detail');

    if (!course) {
        container.innerHTML = renderNotFound();
        return;
    }

    const details = getCourseDetails(course);
    const categoryName = categories.find(c => c.id === course.category)?.name || course.category;
    const subcategoryObj = (subcategories[course.category] || []).find(s => s.id === course.subcategory);

    container.innerHTML = renderCourseDetail(course, details, categoryName, subcategoryObj);
    attachAccordionHandlers();
});

function renderNotFound() {
    return `
        <section class="max-w-screen-xl mx-auto px-4 py-24 text-center">
            <div class="text-6xl mb-4">😕</div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Corso non trovato</h1>
            <p class="text-gray-600 mb-6">Il corso che stai cercando non esiste o è stato rimosso.</p>
            <a href="courses.html" class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                Torna al catalogo
            </a>
        </section>
    `;
}

function renderCourseDetail(course, details, categoryName, subcategoryObj) {
    const levelNames = { principiante: 'Principiante', intermedio: 'Intermedio', avanzato: 'Avanzato' };
    const levelColors = {
        principiante: 'bg-green-100 text-green-800',
        intermedio: 'bg-yellow-100 text-yellow-800',
        avanzato: 'bg-red-100 text-red-800'
    };

    const totalHours = Math.round(details.totalMinutes / 60);
    const instructorInitials = course.instructor.split(' ').map(n => n[0]).join('').slice(0, 2);

    return `
        <!-- Hero -->
        <section class="bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 text-white">
            <div class="max-w-screen-xl mx-auto px-4 py-10 lg:py-14">
                <!-- Breadcrumb -->
                <nav class="text-sm text-emerald-100 mb-4">
                    <a href="index.html" class="hover:text-white">Home</a>
                    <span class="mx-2">/</span>
                    <a href="courses.html" class="hover:text-white">Corsi</a>
                    <span class="mx-2">/</span>
                    <a href="courses.html?category=${course.category}" class="hover:text-white">${categoryName}</a>
                    ${subcategoryObj ? `
                        <span class="mx-2">/</span>
                        <a href="courses.html?category=${course.category}&subcategory=${subcategoryObj.id}" class="hover:text-white">${subcategoryObj.name}</a>
                    ` : ''}
                </nav>

                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <span class="inline-block px-3 py-1 text-xs font-medium rounded-full ${levelColors[course.level]} mb-3">
                            ${levelNames[course.level]}
                        </span>
                        <h1 class="text-3xl lg:text-4xl font-bold mb-3 leading-tight">${course.title}</h1>
                        <p class="text-lg text-emerald-100 mb-5">${course.description}</p>

                        <div class="flex flex-wrap items-center gap-4 text-sm mb-5">
                            <div class="flex items-center gap-2">
                                <div class="flex items-center text-yellow-400">${generateStars(course.rating)}</div>
                                <span class="font-semibold">${course.rating}</span>
                                <span class="text-emerald-200">(${course.reviews.toLocaleString('it-IT')} recensioni)</span>
                            </div>
                            <span class="text-emerald-200">•</span>
                            <span class="text-emerald-100">Creato da <strong class="text-white">${course.instructor}</strong></span>
                        </div>

                        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-emerald-100">
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                ${course.duration} ore totali
                            </span>
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                                ${details.totalModules} moduli
                            </span>
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                ${details.totalLessons} lezioni
                            </span>
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
                                ${details.language}
                            </span>
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                Aggiornato ${details.lastUpdate}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main content -->
        <section class="max-w-screen-xl mx-auto px-4 py-10">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Left column -->
                <div class="lg:col-span-2 space-y-8">
                    <!-- What you'll learn -->
                    <div class="border border-gray-200 rounded-xl p-6 bg-white">
                        <h2 class="text-xl font-bold text-gray-900 mb-4">Cosa imparerai</h2>
                        <ul class="grid sm:grid-cols-2 gap-3">
                            ${details.whatYouLearn.map(item => `
                                <li class="flex items-start gap-2 text-gray-700 text-sm">
                                    <svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                    <span>${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Course content -->
                    <div>
                        <div class="flex items-end justify-between mb-4">
                            <h2 class="text-xl font-bold text-gray-900">Contenuto del corso</h2>
                            <p class="text-sm text-gray-600">${details.totalModules} moduli • ${details.totalLessons} lezioni • ${course.duration} ore totali</p>
                        </div>
                        <div class="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white">
                            ${details.modules.map((mod, idx) => renderModule(mod, idx)).join('')}
                        </div>
                    </div>

                    <!-- Requirements -->
                    <div>
                        <h2 class="text-xl font-bold text-gray-900 mb-3">Requisiti</h2>
                        <ul class="space-y-2 text-gray-700 list-disc list-inside">
                            ${details.requirements.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>

                    <!-- Description -->
                    <div>
                        <h2 class="text-xl font-bold text-gray-900 mb-3">Descrizione</h2>
                        <p class="text-gray-700 leading-relaxed">${details.longDescription}</p>
                    </div>

                    <!-- Audience -->
                    <div>
                        <h2 class="text-xl font-bold text-gray-900 mb-3">A chi è rivolto questo corso</h2>
                        <ul class="space-y-2 text-gray-700">
                            ${details.audience.map(a => `
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg>
                                    <span>${a}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Instructor -->
                    <div class="border border-gray-200 rounded-xl p-6 bg-white">
                        <h2 class="text-xl font-bold text-gray-900 mb-4">Istruttore</h2>
                        <div class="flex items-start gap-4">
                            <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl flex-shrink-0">
                                ${instructorInitials}
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">${course.instructor}</h3>
                                <p class="text-sm text-gray-500 mb-2">Esperto in ${categoryName}</p>
                                <p class="text-sm text-gray-700">Professionista con esperienza pluriennale nel settore, formatore e consulente per aziende e privati. Ha aiutato migliaia di studenti a raggiungere i propri obiettivi.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right column — sticky card -->
                <aside class="lg:col-span-1">
                    <div class="lg:sticky lg:top-20 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                        <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover" onerror="this.src='https://via.placeholder.com/400x250/e2e8f0/64748b?text=Corso'">
                        <div class="p-6">
                            <div class="text-3xl font-bold text-gray-900 mb-4">€${course.price.toFixed(2)}</div>
                            <button class="w-full px-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors mb-2">
                                Aggiungi al carrello
                            </button>
                            <button class="w-full px-4 py-3 border-2 border-emerald-600 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors">
                                Acquista ora
                            </button>
                            <p class="text-xs text-center text-gray-500 mt-3">Garanzia soddisfatti o rimborsati entro 30 giorni</p>

                            <div class="border-t border-gray-200 mt-6 pt-6">
                                <h4 class="font-semibold text-gray-900 mb-3">Questo corso include:</h4>
                                <ul class="space-y-2 text-sm text-gray-700">
                                    <li class="flex items-center gap-2">
                                        <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                        ${totalHours} ore di video on-demand
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                                        ${details.totalModules} moduli strutturati
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                                        ${details.totalLessons} lezioni con esercizi
                                    </li>
                                    ${details.hasLifetimeAccess ? `
                                    <li class="flex items-center gap-2">
                                        <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                        Accesso a vita
                                    </li>` : ''}
                                    ${details.hasMobileAccess ? `
                                    <li class="flex items-center gap-2">
                                        <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                                        Accesso da mobile e TV
                                    </li>` : ''}
                                    ${details.hasCertificate ? `
                                    <li class="flex items-center gap-2">
                                        <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                                        Certificato di completamento
                                    </li>` : ''}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    `;
}

function renderModule(mod, idx) {
    const totalMinutes = mod.lessons.reduce((sum, l) => sum + l.minutes, 0);
    return `
        <div class="module-item">
            <button class="module-header w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-50 transition-colors" data-module="${idx}" aria-expanded="false">
                <div class="flex items-center gap-3">
                    <svg class="module-chevron w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    <span class="font-semibold text-gray-900">Modulo ${idx + 1}: ${mod.title}</span>
                </div>
                <span class="text-sm text-gray-500">${mod.lessons.length} lezioni • ${formatMinutes(totalMinutes)}</span>
            </button>
            <div class="module-body hidden bg-gray-50 border-t border-gray-200">
                <ul class="divide-y divide-gray-200">
                    ${mod.lessons.map(lesson => `
                        <li class="flex items-center justify-between px-6 py-3 text-sm">
                            <span class="flex items-center gap-3 text-gray-700">
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                ${lesson.title}
                            </span>
                            <span class="text-gray-500">${lesson.minutes} min</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

function formatMinutes(minutes) {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m === 0 ? `${h}h` : `${h}h ${m}min`;
}

function attachAccordionHandlers() {
    document.querySelectorAll('.module-header').forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const chevron = header.querySelector('.module-chevron');
            const expanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', String(!expanded));
            body.classList.toggle('hidden');
            chevron.style.transform = expanded ? 'rotate(0deg)' : 'rotate(90deg)';
        });
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    let html = '';
    for (let i = 0; i < fullStars; i++) {
        html += '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }
    if (hasHalfStar) {
        html += '<svg class="w-4 h-4" viewBox="0 0 20 20"><defs><linearGradient id="halfDetail"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#D1D5DB"/></linearGradient></defs><path fill="url(#halfDetail)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>';
    }
    return html;
}