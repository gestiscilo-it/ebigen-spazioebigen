// Mock data for courses
const courses = [
    {
        id: 1,
        title: "JavaScript Completo: Da Zero a Esperto",
        description: "Impara JavaScript dalle basi fino alle tecniche avanzate con progetti pratici",
        instructor: "Marco Rossi",
        category: "sviluppo-web",
        subcategory: "frontend",
        level: "principiante",
        duration: 12,
        price: 89.99,
        rating: 4.8,
        reviews: 2340,
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        title: "React.js: Costruisci Applicazioni Moderne",
        description: "Sviluppa applicazioni web moderne con React, Redux e React Router",
        instructor: "Laura Bianchi",
        category: "sviluppo-web",
        subcategory: "frontend",
        level: "intermedio",
        duration: 18,
        price: 129.99,
        rating: 4.9,
        reviews: 1856,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        title: "UI/UX Design: Principi Fondamentali",
        description: "Impara a progettare interfacce utente intuitive e belle",
        instructor: "Giulia Verdi",
        category: "design-ux",
        subcategory: "ux-design",
        level: "principiante",
        duration: 8,
        price: 69.99,
        rating: 4.7,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
        id: 4,
        title: "Figma Masterclass",
        description: "Diventa un esperto di Figma per la progettazione UI professionale",
        instructor: "Alessandro Neri",
        category: "design-ux",
        subcategory: "ui-design",
        level: "intermedio",
        duration: 10,
        price: 79.99,
        rating: 4.6,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=250&fit=crop"
    },
    {
        id: 5,
        title: "SEO: Ottimizzazione per Motori di Ricerca",
        description: "Porta il tuo sito in prima pagina su Google",
        instructor: "Francesca Colombo",
        category: "marketing-digitale",
        subcategory: "seo",
        level: "principiante",
        duration: 6,
        price: 59.99,
        rating: 4.5,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop"
    },
    {
        id: 6,
        title: "Social Media Marketing Avanzato",
        description: "Strategie avanzate per dominare i social media",
        instructor: "Roberto Ferrari",
        category: "marketing-digitale",
        subcategory: "social-media",
        level: "avanzato",
        duration: 15,
        price: 149.99,
        rating: 4.8,
        reviews: 1567,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
    },
    {
        id: 7,
        title: "Python per Data Science",
        description: "Analisi dati e machine learning con Python",
        instructor: "Elena Martini",
        category: "data-science",
        subcategory: "python",
        level: "intermedio",
        duration: 20,
        price: 159.99,
        rating: 4.9,
        reviews: 3210,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop"
    },
    {
        id: 8,
        title: "Machine Learning: Dalle Basi alla Pratica",
        description: "Costruisci modelli di ML con scikit-learn e TensorFlow",
        instructor: "Paolo Ricci",
        category: "data-science",
        subcategory: "machine-learning",
        level: "avanzato",
        duration: 25,
        price: 199.99,
        rating: 4.7,
        reviews: 1890,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
        id: 9,
        title: "Business Plan: Da Idea a Impresa",
        description: "Crea un business plan vincente per la tua startup",
        instructor: "Chiara Galli",
        category: "business",
        subcategory: "imprenditoria",
        level: "principiante",
        duration: 4,
        price: 49.99,
        rating: 4.4,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
        id: 10,
        title: "Leadership e Management",
        description: "Diventa un leader efficace e gestisci team di successo",
        instructor: "Antonio Moretti",
        category: "business",
        subcategory: "leadership",
        level: "intermedio",
        duration: 8,
        price: 89.99,
        rating: 4.6,
        reviews: 1123,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
    },
    {
        id: 11,
        title: "Inglese Business",
        description: "Inglese professionale per il mondo del lavoro",
        instructor: "Sarah Johnson",
        category: "lingue",
        subcategory: "inglese",
        level: "intermedio",
        duration: 12,
        price: 79.99,
        rating: 4.5,
        reviews: 2456,
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop"
    },
    {
        id: 12,
        title: "Spagnolo da Zero",
        description: "Impara lo spagnolo partendo dalle basi",
        instructor: "Maria Garcia",
        category: "lingue",
        subcategory: "spagnolo",
        level: "principiante",
        duration: 15,
        price: 69.99,
        rating: 4.7,
        reviews: 1789,
        image: "https://images.unsplash.com/photo-1489945052260-4f21c52571d0?w=400&h=250&fit=crop"
    },
    {
        id: 13,
        title: "Fotografia Digitale Completa",
        description: "Dalla composizione al fotoritocco professionale",
        instructor: "Luca Santini",
        category: "fotografia-video",
        subcategory: "fotografia",
        level: "principiante",
        duration: 10,
        price: 99.99,
        rating: 4.8,
        reviews: 2987,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop"
    },
    {
        id: 14,
        title: "Video Editing con Premiere Pro",
        description: "Monta video professionali con Adobe Premiere",
        instructor: "Matteo Bruno",
        category: "fotografia-video",
        subcategory: "video-editing",
        level: "intermedio",
        duration: 14,
        price: 119.99,
        rating: 4.6,
        reviews: 1654,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop"
    },
    {
        id: 15,
        title: "Node.js: Backend Development",
        description: "Crea API REST e applicazioni backend con Node.js",
        instructor: "Marco Rossi",
        category: "sviluppo-web",
        subcategory: "backend",
        level: "intermedio",
        duration: 16,
        price: 109.99,
        rating: 4.7,
        reviews: 1432,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    },
    {
        id: 16,
        title: "Google Ads: Pubblicità Efficace",
        description: "Crea campagne pubblicitarie che convertono",
        instructor: "Francesca Colombo",
        category: "marketing-digitale",
        subcategory: "advertising",
        level: "intermedio",
        duration: 7,
        price: 89.99,
        rating: 4.5,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=400&h=250&fit=crop"
    },
    {
        id: 17,
        title: "SQL e Database",
        description: "Gestione database relazionali con SQL",
        instructor: "Elena Martini",
        category: "data-science",
        subcategory: "sql-database",
        level: "principiante",
        duration: 8,
        price: 59.99,
        rating: 4.6,
        reviews: 2134,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop"
    },
    {
        id: 18,
        title: "Excel Avanzato per il Business",
        description: "Diventa un esperto di Excel con formule avanzate e macro",
        instructor: "Antonio Moretti",
        category: "business",
        subcategory: "produttivita",
        level: "avanzato",
        duration: 6,
        price: 69.99,
        rating: 4.4,
        reviews: 1543,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
        id: 19,
        title: "Motion Graphics con After Effects",
        description: "Crea animazioni e motion graphics professionali",
        instructor: "Matteo Bruno",
        category: "fotografia-video",
        subcategory: "motion-graphics",
        level: "avanzato",
        duration: 18,
        price: 139.99,
        rating: 4.8,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop"
    },
    {
        id: 20,
        title: "Design System con Figma",
        description: "Crea design system scalabili per grandi progetti",
        instructor: "Giulia Verdi",
        category: "design-ux",
        subcategory: "design-system",
        level: "avanzato",
        duration: 12,
        price: 129.99,
        rating: 4.9,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop"
    }
];

// Categories configuration
const categories = [
    { id: "tutti", name: "Tutti i Corsi" },
    { id: "sviluppo-web", name: "Sviluppo Web" },
    { id: "design-ux", name: "Design & UX" },
    { id: "marketing-digitale", name: "Marketing Digitale" },
    { id: "data-science", name: "Data Science" },
    { id: "business", name: "Business" },
    { id: "lingue", name: "Lingue" },
    { id: "fotografia-video", name: "Fotografia & Video" }
];

// Subcategories — map category id → array of subcategories
const subcategories = {
    "sviluppo-web": [
        { id: "frontend", name: "Frontend" },
        { id: "backend", name: "Backend" },
        { id: "full-stack", name: "Full Stack" },
        { id: "cms", name: "CMS & Piattaforme" }
    ],
    "design-ux": [
        { id: "ux-design", name: "UX Design" },
        { id: "ui-design", name: "UI Design" },
        { id: "design-system", name: "Design System" },
        { id: "prototipazione", name: "Prototipazione" }
    ],
    "marketing-digitale": [
        { id: "seo", name: "SEO" },
        { id: "social-media", name: "Social Media" },
        { id: "advertising", name: "Advertising" },
        { id: "email", name: "Email Marketing" }
    ],
    "data-science": [
        { id: "python", name: "Python & Analisi" },
        { id: "machine-learning", name: "Machine Learning" },
        { id: "sql-database", name: "SQL & Database" },
        { id: "visualizzazione", name: "Visualizzazione Dati" }
    ],
    "business": [
        { id: "imprenditoria", name: "Imprenditoria" },
        { id: "leadership", name: "Leadership & Team" },
        { id: "finanza", name: "Finanza" },
        { id: "produttivita", name: "Produttività" }
    ],
    "lingue": [
        { id: "inglese", name: "Inglese" },
        { id: "spagnolo", name: "Spagnolo" },
        { id: "altre", name: "Altre Lingue" }
    ],
    "fotografia-video": [
        { id: "fotografia", name: "Fotografia" },
        { id: "video-editing", name: "Video Editing" },
        { id: "motion-graphics", name: "Motion Graphics" }
    ]
};

// Levels configuration
const levels = [
    { id: "tutti", name: "Tutti i livelli" },
    { id: "principiante", name: "Principiante" },
    { id: "intermedio", name: "Intermedio" },
    { id: "avanzato", name: "Avanzato" }
];

// Duration ranges
const durationRanges = [
    { id: "tutti", name: "Qualsiasi durata", min: 0, max: Infinity },
    { id: "short", name: "< 2 ore", min: 0, max: 2 },
    { id: "medium", name: "2-5 ore", min: 2, max: 5 },
    { id: "long", name: "5-10 ore", min: 5, max: 10 },
    { id: "extended", name: "> 10 ore", min: 10, max: Infinity }
];

// Sort options
const sortOptions = [
    { id: "popular", name: "Più popolari" },
    { id: "recent", name: "Più recenti" },
    { id: "price-asc", name: "Prezzo crescente" },
    { id: "price-desc", name: "Prezzo decrescente" },
    { id: "rating", name: "Valutazione" }
];
