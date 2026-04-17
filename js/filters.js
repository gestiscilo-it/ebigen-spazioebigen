// Filter state
const filterState = {
    category: "tutti",
    subcategory: "tutti",
    level: "tutti",
    duration: "tutti",
    priceMin: 0,
    priceMax: 500,
    search: "",
    sort: "popular"
};

// Apply all filters to courses
function applyFilters(coursesData) {
    let filtered = [...coursesData];

    // Filter by category
    if (filterState.category !== "tutti") {
        filtered = filtered.filter(course => course.category === filterState.category);
    }

    // Filter by subcategory (only meaningful when a category is selected)
    if (filterState.subcategory !== "tutti" && filterState.category !== "tutti") {
        filtered = filtered.filter(course => course.subcategory === filterState.subcategory);
    }

    // Filter by level
    if (filterState.level !== "tutti") {
        filtered = filtered.filter(course => course.level === filterState.level);
    }

    // Filter by duration
    if (filterState.duration !== "tutti") {
        const durationRange = durationRanges.find(d => d.id === filterState.duration);
        if (durationRange) {
            filtered = filtered.filter(course =>
                course.duration >= durationRange.min && course.duration < durationRange.max
            );
        }
    }

    // Filter by price range
    filtered = filtered.filter(course =>
        course.price >= filterState.priceMin && course.price <= filterState.priceMax
    );

    // Filter by search query
    if (filterState.search.trim() !== "") {
        const searchLower = filterState.search.toLowerCase();
        filtered = filtered.filter(course =>
            course.title.toLowerCase().includes(searchLower) ||
            course.description.toLowerCase().includes(searchLower) ||
            course.instructor.toLowerCase().includes(searchLower)
        );
    }

    // Apply sorting
    filtered = sortCourses(filtered, filterState.sort);

    return filtered;
}

// Sort courses
function sortCourses(coursesData, sortType) {
    const sorted = [...coursesData];

    switch (sortType) {
        case "popular":
            return sorted.sort((a, b) => b.reviews - a.reviews);
        case "recent":
            return sorted.sort((a, b) => b.id - a.id);
        case "price-asc":
            return sorted.sort((a, b) => a.price - b.price);
        case "price-desc":
            return sorted.sort((a, b) => b.price - a.price);
        case "rating":
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
}

// Update filter state
function updateFilter(filterName, value) {
    filterState[filterName] = value;
}

// Reset all filters
function resetFilters() {
    filterState.category = "tutti";
    filterState.subcategory = "tutti";
    filterState.level = "tutti";
    filterState.duration = "tutti";
    filterState.priceMin = 0;
    filterState.priceMax = 500;
    filterState.search = "";
    filterState.sort = "popular";
}

// Get active filters count
function getActiveFiltersCount() {
    let count = 0;
    if (filterState.category !== "tutti") count++;
    if (filterState.subcategory !== "tutti") count++;
    if (filterState.level !== "tutti") count++;
    if (filterState.duration !== "tutti") count++;
    if (filterState.priceMin > 0 || filterState.priceMax < 500) count++;
    if (filterState.search.trim() !== "") count++;
    return count;
}
