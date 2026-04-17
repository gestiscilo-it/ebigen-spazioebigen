// Curriculum templates per category — used to generate course detail content
const curriculumTemplates = {
    'sviluppo-web': {
        whatYouLearn: [
            'Padroneggiare linguaggi e framework moderni',
            'Costruire applicazioni web scalabili da zero',
            'Utilizzare Git e strumenti di sviluppo professionali',
            'Implementare best practice e pattern riconosciuti',
            'Debuggare, testare e ottimizzare il codice',
            'Pubblicare progetti reali online'
        ],
        requirements: [
            'Computer con sistema operativo moderno',
            'Connessione internet stabile',
            'Conoscenza base di HTML e CSS (utile ma non obbligatoria)',
            'Voglia di esercitarsi con progetti pratici'
        ],
        audience: [
            'Aspiranti sviluppatori web',
            'Professionisti in transizione di carriera',
            'Sviluppatori junior che vogliono consolidare le basi',
            'Freelance che vogliono ampliare i propri servizi'
        ],
        longDescription: 'Questo corso completo ti guiderà passo dopo passo nel mondo dello sviluppo web moderno. Attraverso video lezioni pratiche, esercizi guidati e progetti reali, acquisirai le competenze richieste dalle aziende e costruirai un portfolio solido da presentare ai recruiter.',
        modules: [
            { title: 'Introduzione e setup', lessons: ['Panoramica del corso', 'Installazione strumenti', 'Struttura del progetto', 'Hello World'] },
            { title: 'Fondamenti del linguaggio', lessons: ['Sintassi base', 'Variabili e tipi di dato', 'Operatori ed espressioni', 'Strutture di controllo'] },
            { title: 'Funzioni e oggetti', lessons: ['Dichiarazione di funzioni', 'Arrow functions', 'Oggetti e proprietà', 'Destructuring'] },
            { title: 'Lavorare con il DOM', lessons: ['Selettori', 'Manipolazione degli elementi', 'Event listener', 'Event delegation'] },
            { title: 'Programmazione asincrona', lessons: ['Callback e Promise', 'async/await', 'Fetch API', 'Gestione degli errori'] },
            { title: 'Componenti e architettura', lessons: ['Pattern MVC', 'Componenti riutilizzabili', 'State management', 'Routing'] },
            { title: 'Testing e debugging', lessons: ['Unit test', 'Test di integrazione', 'Debugging nel browser', 'Profiling delle performance'] },
            { title: 'Progetto finale e deploy', lessons: ['Pianificazione del progetto', 'Sviluppo guidato', 'Ottimizzazione', 'Pubblicazione online'] }
        ]
    },
    'design-ux': {
        whatYouLearn: [
            'Applicare i principi fondamentali di UX/UI design',
            'Condurre ricerca utente efficace',
            'Creare wireframe e prototipi interattivi',
            'Padroneggiare gli strumenti professionali (Figma, Sketch)',
            'Progettare design system scalabili',
            'Presentare e difendere le proprie scelte di design'
        ],
        requirements: [
            'Computer con Figma o Adobe XD installato',
            'Nessuna esperienza pregressa richiesta',
            'Curiosità verso il comportamento degli utenti',
            'Occhio per i dettagli visivi'
        ],
        audience: [
            'Aspiranti UX/UI designer',
            'Graphic designer in transizione al digitale',
            'Sviluppatori che vogliono migliorare le skill di design',
            'Product manager che collaborano con team di design'
        ],
        longDescription: 'Un percorso formativo completo per trasformarti in un designer UX/UI richiesto dal mercato. Imparerai non solo a usare gli strumenti, ma soprattutto a pensare come un designer: empatia, ricerca, iterazione e validazione.',
        modules: [
            { title: 'Fondamenti di UX design', lessons: ['Cos\'è UX design', 'La user-centered design', 'Psicologia dell\'utente', 'Casi studio'] },
            { title: 'Ricerca e analisi', lessons: ['Interviste utente', 'Persona e journey map', 'Analisi competitor', 'Definizione dei problemi'] },
            { title: 'Information architecture', lessons: ['Strutturare i contenuti', 'Card sorting', 'Sitemap', 'User flow'] },
            { title: 'Wireframing', lessons: ['Low-fi vs hi-fi', 'Strumenti di wireframing', 'Layout responsive', 'Revisioni iterative'] },
            { title: 'Visual design', lessons: ['Teoria del colore', 'Tipografia', 'Griglia e spaziature', 'Componenti UI'] },
            { title: 'Prototipazione', lessons: ['Prototipi interattivi', 'Micro-interazioni', 'Animazioni', 'Test di usabilità'] },
            { title: 'Design system', lessons: ['Principi dei design system', 'Token e componenti', 'Documentazione', 'Collaborazione con gli sviluppatori'] },
            { title: 'Portfolio e case study', lessons: ['Costruire un portfolio', 'Raccontare i progetti', 'Prepararsi ai colloqui', 'Risorse continue'] }
        ]
    },
    'marketing-digitale': {
        whatYouLearn: [
            'Pianificare strategie di marketing digitale efficaci',
            'Gestire campagne SEO, SEM e social',
            'Analizzare dati e ottimizzare il ROI',
            'Creare contenuti che convertono',
            'Padroneggiare Google Analytics e strumenti di reporting',
            'Costruire un funnel di acquisizione completo'
        ],
        requirements: [
            'Computer e connessione internet',
            'Conoscenza base degli strumenti digitali',
            'Nessuna esperienza pregressa richiesta',
            'Mentalità analitica e creativa'
        ],
        audience: [
            'Aspiranti marketer e imprenditori',
            'Liberi professionisti che vogliono promuoversi',
            'Responsabili marketing di PMI',
            'Content creator e social media manager'
        ],
        longDescription: 'Un programma pratico e aggiornato con le strategie di marketing digitale più efficaci del 2025. Imparerai a pianificare campagne, misurare i risultati e massimizzare il ritorno sull\'investimento.',
        modules: [
            { title: 'Introduzione al marketing digitale', lessons: ['Il panorama digitale', 'Funnel di acquisizione', 'KPI fondamentali', 'Case study di successo'] },
            { title: 'SEO fondamentale', lessons: ['Come funzionano i motori di ricerca', 'Keyword research', 'SEO on-page', 'Link building'] },
            { title: 'Google Ads e SEM', lessons: ['Creare una campagna', 'Targeting avanzato', 'Ottimizzazione degli annunci', 'Gestione del budget'] },
            { title: 'Social media marketing', lessons: ['Scegliere le piattaforme', 'Content calendar', 'Engagement e community', 'Advertising sui social'] },
            { title: 'Email marketing', lessons: ['Costruire la lista', 'Segmentazione', 'Automazione', 'Metriche chiave'] },
            { title: 'Content marketing', lessons: ['Strategia editoriale', 'Copywriting persuasivo', 'Storytelling', 'Video e podcast'] },
            { title: 'Analytics e ottimizzazione', lessons: ['Google Analytics 4', 'Tag Manager', 'A/B testing', 'Reporting ai clienti'] }
        ]
    },
    'data-science': {
        whatYouLearn: [
            'Analizzare dati con Python e librerie dedicate',
            'Creare visualizzazioni efficaci',
            'Implementare algoritmi di machine learning',
            'Lavorare con dataset reali',
            'Comunicare insight ai decision maker',
            'Utilizzare SQL per interrogare database'
        ],
        requirements: [
            'Conoscenza base della matematica (statistica utile)',
            'Computer con almeno 8GB di RAM',
            'Python installato (guida inclusa)',
            'Interesse per l\'analisi dei dati'
        ],
        audience: [
            'Aspiranti data analyst e data scientist',
            'Analisti che vogliono potenziare le skill tecniche',
            'Sviluppatori interessati al machine learning',
            'Ricercatori e professionisti STEM'
        ],
        longDescription: 'Un percorso completo che ti porterà dalle basi dell\'analisi dati fino al machine learning applicato. Lavorerai su casi reali e costruirai un portfolio di progetti da mostrare alle aziende.',
        modules: [
            { title: 'Introduzione alla data science', lessons: ['Il ruolo del data scientist', 'Setup dell\'ambiente', 'Jupyter Notebook', 'Il ciclo di vita di un progetto'] },
            { title: 'Python per l\'analisi dati', lessons: ['Basi di Python', 'NumPy per array e operazioni', 'Pandas per DataFrame', 'Gestione dei dati mancanti'] },
            { title: 'Visualizzazione dei dati', lessons: ['Matplotlib', 'Seaborn', 'Grafici interattivi con Plotly', 'Dashboard con Streamlit'] },
            { title: 'Statistica applicata', lessons: ['Statistica descrittiva', 'Distribuzioni', 'Test di ipotesi', 'Correlazione e regressione'] },
            { title: 'Machine learning supervisionato', lessons: ['Regressione lineare', 'Classificazione', 'Alberi decisionali', 'Ensemble methods'] },
            { title: 'Machine learning non supervisionato', lessons: ['Clustering', 'Riduzione dimensionale', 'Anomaly detection', 'Valutazione dei modelli'] },
            { title: 'SQL e database', lessons: ['SELECT e filtri', 'Join tra tabelle', 'Aggregazioni', 'Query complesse'] },
            { title: 'Progetto finale', lessons: ['Definizione del problema', 'Preparazione dei dati', 'Modellazione', 'Presentazione dei risultati'] }
        ]
    },
    'business': {
        whatYouLearn: [
            'Pensare strategicamente per la crescita del business',
            'Leggere e costruire un business plan solido',
            'Gestire team e risorse con efficacia',
            'Analizzare dati finanziari fondamentali',
            'Negoziare e comunicare in modo persuasivo',
            'Prendere decisioni basate sui dati'
        ],
        requirements: [
            'Nessun prerequisito tecnico richiesto',
            'Interesse per il mondo del business',
            'Disponibilità a mettersi in gioco con casi pratici'
        ],
        audience: [
            'Imprenditori e aspiranti tali',
            'Manager e team leader',
            'Professionisti in crescita di carriera',
            'Studenti di economia e management'
        ],
        longDescription: 'Un percorso pratico pensato per chi vuole acquisire competenze di business immediatamente spendibili. Strumenti, framework e casi studio reali per fare la differenza sul lavoro.',
        modules: [
            { title: 'Fondamenti di business', lessons: ['Modello di business', 'Proposta di valore', 'Analisi del mercato', 'Vantaggio competitivo'] },
            { title: 'Strategia', lessons: ['Analisi SWOT', 'Framework di Porter', 'Business Model Canvas', 'OKR e KPI'] },
            { title: 'Finanza per non finanzieri', lessons: ['Stato patrimoniale', 'Conto economico', 'Cash flow', 'Analisi degli indici'] },
            { title: 'Leadership e gestione', lessons: ['Stili di leadership', 'Gestione del team', 'Delega efficace', 'Feedback e performance review'] },
            { title: 'Comunicazione e negoziazione', lessons: ['Public speaking', 'Negoziazione win-win', 'Gestione dei conflitti', 'Presentazioni efficaci'] },
            { title: 'Execution e progetti', lessons: ['Gestione di progetti', 'Strumenti agili', 'Priorità e focus', 'Misurare i risultati'] }
        ]
    },
    'lingue': {
        whatYouLearn: [
            'Comunicare con sicurezza in contesti reali',
            'Ampliare il vocabolario di base e avanzato',
            'Padroneggiare la pronuncia corretta',
            'Comprendere conversazioni native',
            'Scrivere email e documenti professionali',
            'Superare esami e certificazioni'
        ],
        requirements: [
            'Nessun prerequisito richiesto',
            'Disponibilità a pratica giornaliera',
            'Materiale didattico fornito',
            'Microfono per gli esercizi di pronuncia'
        ],
        audience: [
            'Principianti assoluti',
            'Viaggiatori e appassionati',
            'Professionisti che lavorano all\'estero',
            'Studenti in preparazione a esami'
        ],
        longDescription: 'Un metodo pratico per apprendere una lingua in modo efficace, con focus su conversazione reale, esercizi interattivi e contenuti autentici.',
        modules: [
            { title: 'Pronuncia e alfabeto', lessons: ['Suoni di base', 'Alfabeto e ortografia', 'Accenti e intonazione', 'Esercizi di ascolto'] },
            { title: 'Vocabolario essenziale', lessons: ['Saluti e presentazioni', 'Numeri e date', 'Famiglia e relazioni', 'Casa e oggetti quotidiani'] },
            { title: 'Grammatica base', lessons: ['Articoli e sostantivi', 'Verbi al presente', 'Aggettivi', 'Pronomi personali'] },
            { title: 'Conversazione quotidiana', lessons: ['Al ristorante', 'In viaggio', 'Fare shopping', 'Chiedere indicazioni'] },
            { title: 'Grammatica intermedia', lessons: ['Tempi verbali passati', 'Futuro', 'Frasi subordinate', 'Preposizioni'] },
            { title: 'Linguaggio professionale', lessons: ['Email formali', 'Colloquio di lavoro', 'Riunioni e call', 'Presentazioni'] },
            { title: 'Preparazione esami', lessons: ['Struttura degli esami', 'Strategie di lettura', 'Listening avanzato', 'Simulazioni'] }
        ]
    },
    'fotografia-video': {
        whatYouLearn: [
            'Usare fotocamera e obiettivi in modo professionale',
            'Padroneggiare composizione e illuminazione',
            'Editare foto e video con software professionali',
            'Creare contenuti per social e portfolio',
            'Raccontare storie attraverso immagini in movimento',
            'Monetizzare il proprio lavoro creativo'
        ],
        requirements: [
            'Fotocamera reflex, mirrorless o smartphone avanzato',
            'Computer con software di editing (lista nel corso)',
            'Nessuna esperienza pregressa richiesta',
            'Passione per la creatività visiva'
        ],
        audience: [
            'Aspiranti fotografi e videomaker',
            'Content creator e social media manager',
            'Appassionati che vogliono migliorare',
            'Professionisti in cerca di nuovi strumenti espressivi'
        ],
        longDescription: 'Un corso pratico per trasformare la passione in competenza. Tecnica, creatività e post-produzione in un unico percorso strutturato.',
        modules: [
            { title: 'Conoscere l\'attrezzatura', lessons: ['Fotocamera e sensori', 'Obiettivi', 'Accessori essenziali', 'Impostazioni di base'] },
            { title: 'Esposizione e triangolo', lessons: ['ISO', 'Apertura del diaframma', 'Tempo di scatto', 'Modalità di scatto'] },
            { title: 'Composizione', lessons: ['Regola dei terzi', 'Linee guida', 'Profondità di campo', 'Composizioni creative'] },
            { title: 'Illuminazione', lessons: ['Luce naturale', 'Luce artificiale', 'Setup in studio', 'Esterni e riflettori'] },
            { title: 'Post-produzione foto', lessons: ['Lightroom', 'Photoshop di base', 'Color grading', 'Ritocco avanzato'] },
            { title: 'Riprese video', lessons: ['Impostazioni video', 'Stabilizzazione', 'Audio in presa diretta', 'B-roll'] },
            { title: 'Editing video', lessons: ['Premiere Pro', 'Montaggio narrativo', 'Transizioni e effetti', 'Export e consegna'] },
            { title: 'Portfolio e cliente', lessons: ['Selezionare il lavoro migliore', 'Creare un sito portfolio', 'Gestire i clienti', 'Pricing'] }
        ]
    }
};

function getCourseDetails(course) {
    const template = curriculumTemplates[course.category] || curriculumTemplates['sviluppo-web'];

    const maxModules = template.modules.length;
    const targetModules = Math.min(maxModules, Math.max(4, Math.ceil(course.duration / 2)));
    const selectedModules = template.modules.slice(0, targetModules);

    const totalLessons = selectedModules.reduce((sum, m) => sum + m.lessons.length, 0);
    const avgMinutesPerLesson = Math.max(5, Math.round((course.duration * 60) / totalLessons));

    return {
        modules: selectedModules.map(m => ({
            title: m.title,
            lessons: m.lessons.map(title => ({ title, minutes: avgMinutesPerLesson }))
        })),
        totalModules: selectedModules.length,
        totalLessons,
        totalMinutes: course.duration * 60,
        whatYouLearn: template.whatYouLearn,
        requirements: template.requirements,
        audience: template.audience,
        language: 'Italiano',
        hasCertificate: true,
        hasMobileAccess: true,
        hasLifetimeAccess: true,
        lastUpdate: '2025-10',
        longDescription: template.longDescription
    };
}
