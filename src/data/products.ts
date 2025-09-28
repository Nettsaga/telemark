export interface Product {
  id: string;
  name: string;
  model: string;
  year: number;
  price: number;
  location: string;
  dealer: string;
  category: 'wheel-loaders' | 'aggregates' | 'boat-engines';
  subcategory?: string;
  image: string;
  description: string;
  specifications?: {
    power?: string;
    weight?: string;
    fuel?: string;
    engine?: string;
    [key: string]: string | undefined;
  };
  featured?: boolean;
  inStock?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

// Wheel Loaders from finn.no
export const wheelLoaders: Product[] = [
  {
    id: 'hzm-811-1',
    name: 'HZM 811',
    model: 'HZM 811',
    year: 2025,
    price: 189900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'wheel-loaders',
    image: '/products/1.avif',
    description: 'Kompakt og kraftig hjullaster fra HZM. Perfekt for mindre anleggsarbeider og transport av materialer.',
    specifications: {
      power: 'TBD',
      weight: 'TBD',
      fuel: 'Diesel'
    },
    featured: true,
    inStock: true
  },
  {
    id: 'everun-er416-euro5',
    name: 'Everun ER 416 Euro 5',
    model: 'ER 416 Euro 5',
    year: 2025,
    price: 249900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'wheel-loaders',
    image: '/products/2.avif',
    description: 'Moderne hjullaster med Euro 5 motor. Miljøvennlig og effektiv løsning for anleggsarbeider.',
    specifications: {
      power: 'TBD',
      weight: 'TBD',
      fuel: 'Diesel Euro 5'
    },
    featured: true,
    inStock: true
  },
  {
    id: 'everun-er08e-electric-1',
    name: 'Everun ER08E Elektrisk',
    model: 'ER08E',
    year: 2025,
    price: 189900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'wheel-loaders',
    subcategory: 'electric',
    image: '/products/3.avif',
    description: 'Helt elektrisk hjullaster. Stillegående og miljøvennlig løsning for innendørs og urbane arbeider.',
    specifications: {
      power: 'Elektrisk',
      weight: 'TBD',
      fuel: 'Batteri'
    },
    featured: true,
    inStock: true
  },
  {
    id: 'everun-er08e-electric-2',
    name: 'Everun ER08E Elektrisk',
    model: 'ER08E',
    year: 2025,
    price: 189900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'wheel-loaders',
    subcategory: 'electric',
    image: '/products/4.avif',
    description: 'Helt elektrisk hjullaster. Stillegående og miljøvennlig løsning for innendørs og urbane arbeider.',
    specifications: {
      power: 'Elektrisk',
      weight: 'TBD',
      fuel: 'Batteri'
    },
    inStock: true
  },
  {
    id: 'everun-er10-pro',
    name: 'Everun ER 10 PRO',
    model: 'ER 10 PRO',
    year: 2024,
    price: 99900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'wheel-loaders',
    image: '/products/5.avif',
    description: 'Kompakt hjullaster i PRO-serien. Ideell for mindre prosjekter og trange arbeidsområder.',
    specifications: {
      power: 'TBD',
      weight: 'TBD',
      fuel: 'Diesel'
    },
    inStock: true
  },
  {
    id: 'everun-hzm-811-2',
    name: 'Everun HZM 811',
    model: 'HZM 811',
    year: 2025,
    price: 189900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'wheel-loaders',
    image: '/products/6.avif',
    description: 'Pålitelig hjullaster fra Everun. Robust konstruksjon for krevende arbeidsforhold.',
    specifications: {
      power: 'TBD',
      weight: 'TBD',
      fuel: 'Diesel'
    },
    inStock: true
  }
];

// Aggregates/Extensions from finn.no
export const aggregates: Product[] = [
  {
    id: 'yt-15ds-1',
    name: 'Aggregat diesel YT 15DS',
    model: 'YT 15DS',
    year: 2025,
    price: 54900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade As',
    category: 'aggregates',
    image: '/extension/1.avif',
    description: 'Kraftig dieselaggregat på 15kW. Pålitelig strømkilde for arbeidsplasser uten nettilkobling.',
    specifications: {
      power: '15kW',
      fuel: 'Diesel',
      engine: 'TBD'
    },
    featured: true,
    inStock: true
  },
  {
    id: 'yt-10ds-1',
    name: 'Aggregat diesel YT 10DS',
    model: 'YT 10DS',
    year: 2025,
    price: 44900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade As',
    category: 'aggregates',
    image: '/extension/2.avif',
    description: 'Kompakt dieselaggregat på 10kW. Ideell for mindre prosjekter og backup-strøm.',
    specifications: {
      power: '10kW',
      fuel: 'Diesel',
      engine: 'TBD'
    },
    inStock: true
  },
  {
    id: 'yt-10ds-2',
    name: 'Aggregat diesel YT 10DS',
    model: 'YT 10DS',
    year: 2025,
    price: 44900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade As',
    category: 'aggregates',
    image: '/extension/3.avif',
    description: 'Kompakt dieselaggregat på 10kW. Ideell for mindre prosjekter og backup-strøm.',
    specifications: {
      power: '10kW',
      fuel: 'Diesel',
      engine: 'TBD'
    },
    inStock: true
  },
  {
    id: 'yt-10ds-3',
    name: 'Aggregat diesel YT 10DS',
    model: 'YT 10DS',
    year: 2025,
    price: 44900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade As',
    category: 'aggregates',
    image: '/extension/4.avif',
    description: 'Kompakt dieselaggregat på 10kW. Ideell for mindre prosjekter og backup-strøm.',
    specifications: {
      power: '10kW',
      fuel: 'Diesel',
      engine: 'TBD'
    },
    inStock: true
  },
  {
    id: 'yt-15ds-2',
    name: 'Aggregat diesel YT 15DS',
    model: 'YT 15DS',
    year: 2025,
    price: 54900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade As',
    category: 'aggregates',
    image: '/extension/5.avif',
    description: 'Kraftig dieselaggregat på 15kW. Pålitelig strømkilde for arbeidsplasser uten nettilkobling.',
    specifications: {
      power: '15kW',
      fuel: 'Diesel',
      engine: 'TBD'
    },
    inStock: true
  },
  {
    id: 'yt-15ds-3',
    name: 'Aggregat diesel YT 15DS',
    model: 'YT 15DS',
    year: 2025,
    price: 54900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade As',
    category: 'aggregates',
    image: '/extension/6.avif',
    description: 'Kraftig dieselaggregat på 15kW. Pålitelig strømkilde for arbeidsplasser uten nettilkobling.',
    specifications: {
      power: '15kW',
      fuel: 'Diesel',
      engine: 'TBD'
    },
    inStock: true
  }
];

// Boat engines (simplified for the products page)
export const boatEngines: Product[] = [
  {
    id: 'td-power-engines',
    name: 'TD Power Båtmotorer',
    model: 'Diverse modeller',
    year: 2024,
    price: 74900, // Starting price
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'boat-engines',
    image: '/services/td-power.jpg',
    description: 'Høykvalitets motorer fra 21 til 400 hestekrefter. Pålitelige og kostnadseffektive løsninger for marine anvendelser.',
    specifications: {
      power: '21-400 HK',
      fuel: 'Diesel',
      engine: 'Støpejern'
    },
    featured: false,
    inStock: true
  },
  {
    id: 'hyundai-seasall-engines',
    name: 'Hyundai SeasAll Motorer',
    model: 'Marine serie',
    year: 2024,
    price: 249900, // Starting price
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'boat-engines',
    image: '/services/seasall.jpg',
    description: 'Kraftige marine motorer med høy ytelse gjennom hele turtallsområdet. Moderne teknologi og pålitelighet.',
    specifications: {
      power: '200-700 HK',
      fuel: 'Diesel',
      engine: 'Avansert teknologi'
    },
    featured: false,
    inStock: true
  },
  {
    id: 'aquamot-electric-engines',
    name: 'Aquamot Elektriske Motorer',
    model: 'Elektrisk serie',
    year: 2024,
    price: 89900, // Estimated price
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    category: 'boat-engines',
    image: '/services/aquamot.webp',
    description: 'Ledende produsent av høykvalitets og bærekraftige elektriske båtmotorer med tilhørende komponenter.',
    specifications: {
      power: 'Elektrisk',
      fuel: 'Batteri',
      engine: 'Elektrisk motor'
    },
    featured: false,
    inStock: true
  }
];

// Combine all products
export const allProducts: Product[] = [...wheelLoaders, ...aggregates, ...boatEngines];

// Product categories for navigation
export const productCategories: ProductCategory[] = [
  {
    id: 'wheel-loaders',
    name: 'Hjullastere',
    description: 'Kraftige og pålitelige hjullastere for alle typer anleggsarbeider',
    image: '/products/2.avif',
    productCount: wheelLoaders.length
  },
  {
    id: 'aggregates',
    name: 'Aggregater & Tilbehør',
    description: 'Dieselaggregater og tilbehør for strømforsyning på arbeidsplassen',
    image: '/extension/1.avif',
    productCount: aggregates.length
  },
  {
    id: 'boat-engines',
    name: 'Båtmotorer',
    description: 'Pålitelige båtmotorer fra TD Power, Hyundai SeasAll og Aquamot',
    image: '/services/td-power.jpg',
    productCount: boatEngines.length
  }
];

// Featured products for homepage
export const featuredProducts = allProducts.filter(product => product.featured);

// Helper functions
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('no-NO', {
    style: 'currency',
    currency: 'NOK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};