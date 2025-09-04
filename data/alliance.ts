
export type AllianceCategory = 'skate-shops' | 'brands' | 'vereine' | 'skate-youtuber' | 'skatemags' | 'gute-produkte';

export interface AlliancePartner {
    name: string;
    image: string;
    description: string;
    link: string;
    category: AllianceCategory;
}

export const categories: {id: AllianceCategory, name: string}[] = [
    { id: 'skate-shops', name: 'SKATE SHOPS' },
    { id: 'brands', name: 'BRANDS' },
    { id: 'vereine', name: 'SKATE VEREINE' },
    { id: 'skate-youtuber', name: 'SKATE YOUTUBER' },
    { id: 'skatemags', name: 'SKATEMAGS' },
    { id: 'gute-produkte', name: 'GUTE PRODUKTE' },
];

export const allianceData: AlliancePartner[] = [
    {
        name: 'Lifeboy Skateshop',
        image: '/images/lifeboyskateshop.jpg',
        description: 'Rottweils Skateshop von Rob Hak',
        link: 'https://www.lifeboy-skateshop.de',
        category: 'skate-shops'
    },
    {
        name: 'Blackheaven Skateshop/Koloss Skateboards',
        image: 'https://images.unsplash.com/photo-1556881261-2623a34a36a3?q=80&w=800&auto=format&fit=crop',
        description: 'Skate MEtal Punks- Make Skateboarding asozial again',
        link: 'https://blackheavenshop.com/Beerrings-Classic-Edition',
        category: 'skate-shops'
    },
    {
        name: 'Solide between Runaway and Namaste',
        image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc2d0?q=80&w=800&auto=format&fit=crop',
        description: 'Street Skate Fashion',
        link: 'https://solide.myspreadshop.de/',
        category: 'brands'
    },
    {
        name: 'Shado Clothing',
        image: '/images/shado.jpg',
        description: 'Skate Fashion from USA',
        link: 'https://www.shadoclothing.com ',
        category: 'brands'
    },
    {
        name: 'Koloss Skateboards',
        image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc2d0?q=80&w=800&auto=format&fit=crop',
        description: 'Street Skate Fashion',
        link: '#',
        category: 'brands'
    },
    {
        name: 'DrissnerDecks',
        image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc2d0?q=80&w=800&auto=format&fit=crop',
        description: 'Handgemachte Fingerboards!',
        link: '#',
        category: 'brands'
    },
    {
        name: 'Home of Blues',
        image: '/images/homeofblues.jpg',
        description: 'Qualität und Style - Home of Blues ein besuch wert wenn man in Karlsruhe ist! .',
        link: 'https://homeofblues-karlsruhe.de/',
        category: 'skate-shops'
    },
    {
        name: 'La Mezca Skateshop',
        image: 'https://images.unsplash.com/photo-1581351123004-a010a3a781b8?q=80&w=800&auto=format&fit=crop',
        description: '#',
        link: 'https://www.lamezcaskateshop.com/',
        category: 'skate-shops'
    },
    {
        name: 'Skateboard Verein Besigheim e. V.',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'OG Skateboard e. V. (Offenburg)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'DZA Skateboard Kultur Ahlen e. V.',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Unna Skateboard e. V. (Dortmund)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Flipoff Skateboard e. V.',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Elektro Skateboard Verein e. V. (München)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Rostocker Skateboard e. V. (Rostock)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'S.R.B. I. Skateboard- und Rollerskate-BMX-Club Bochum',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Surf- und Skateboard Club Bielefeld e. V.',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: '1. Aachener Skateboard Club e. V.',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Zeche Rollverein – 1. Skateboard Verein Essen e. V.',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Verein zur Förderung ... Frankfurt e. V.',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto-format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Tree of Life Skateboard e. V. (Neuruppin)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Trendsportclub Hohenstaufen e. V. (Stuttgart)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Urban Souls e. V. (Leipzig)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: '1. Skateboardverein Kassel e. V. (Kassel)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto-format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: '1. Berliner Skateboardverein e. V. (Berlin)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto-format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Backyard e. V. (Oldenburg)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto-format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Rollbrett e. V. Karlsruhe',
        image: '/images/rollbrett-ev.jpg',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Razed Skateboarding Club Schwaben e. V. (Bayern)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Impossible e. V. (Brandenburg)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Concrete Skate e. V. (Hessen)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Rügen Rollt e. V. (Meck-Vorpommern)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Rollbrett Union e. V. Mönchengladbach (NRW)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Skateboardingvulkaneifel e. V. (Rheinland-Pfalz)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Saar Skateboarding e. V. (Saarland)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'urban souls e. V. (Sachsen)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Von der Rolle e. V. (Sachsen-Anhalt)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Bretterbude e. V. (Thüringen)',
        image: 'https://images.unsplash.com/photo-1599229891639-2d4e613f1c30?q=80&w=800&auto=format&fit=crop',
        description: 'Lokaler Skateboard Verein. Unterstützt die Szene vor Ort.',
        link: '#',
        category: 'vereine'
    },
    {
        name: 'Freeling Kim',
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
        description: 'Dein Skateboard Kanal für Tutorials, Reviews und mehr.',
        link: '#',
        category: 'skate-youtuber'
    },
     {
        name: 'RedLuk',
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
        description: 'Dein Skateboard Kanal für Tutorials, Reviews und mehr.',
        link: '#',
        category: 'skate-youtuber'
    },
     {
        name: 'Clipz',
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
        description: 'Dein Skateboard Kanal für Tutorials, Reviews und mehr.',
        link: '#',
        category: 'skate-youtuber'
    },
     {
        name: 'Sortelba',
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
        description: 'Dein Skateboard Kanal für Tutorials, Reviews und mehr.',
        link: '#',
        category: 'skate-youtuber'
    },
     {
        name: 'Debrecher',
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
        description: 'Dein Skateboard Kanal für Tutorials, Reviews und mehr.',
        link: '#',
        category: 'skate-youtuber'
    },
     {
        name: 'Mr. Hofbauer',
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
        description: 'Dein Skateboard Kanal für Tutorials, Reviews und mehr.',
        link: '#',
        category: 'skate-youtuber'
    },
    {
        name: 'Skateboard MSM',
        image: 'https://images.unsplash.com/photo-1574631821214-f5217498b0f3?q=80&w=800&auto=format&fit=crop',
        description: 'Eines der dienstältesten Skateboardmagazine Europas – mit aktuellen News, Videos, Fotos und Szeneberichten.',
        link: 'https://skateboardmsm.de/',
        category: 'skatemags'
    },
    {
        name: 'Irregular Skateboard Magazin',
        image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=800&auto=format&fit=crop',
        description: 'Gegründet 2010 in München – startete als lokales Fanzine und ist heute für kreative Skate-Publikationen bekannt.',
        link: 'https://irregular-magazin.de/',
        category: 'skatemags'
    },
    {
        name: 'Limited Skateboarding Magazine',
        image: 'https://images.unsplash.com/photo-1519741054323-50810c973510?q=80&w=800&auto=format&fit=crop',
        description: 'Bietet kontinuierlich Skateboarding-News und Berichte – ebenfalls mit starkem Deutschlandbezug.',
        link: 'https://www.limitedmag.de/',
        category: 'skatemags'
    },
    {
        name: 'Boardstation Skate Mag',
        image: 'https://images.unsplash.com/photo-1519741054323-50810c973510?q=80&w=800&auto=format&fit=crop',
        description: 'News rund ums skaten ! ',
        link: 'https://www.limitedmag.de/',
        category: 'skatemags'
    },
    {
        name: 'Confusion Magazine',
        image: 'https://images.unsplash.com/photo-1473992388998-35a09212a456?q=80&w=800&auto=format&fit=crop',
        description: 'International Skateboard Magazine.',
        link: 'https://www.confuzine.com/',
        category: 'skatemags'
    }
];