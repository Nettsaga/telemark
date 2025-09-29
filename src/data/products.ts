export interface Product {
  id: string;
  name: string;
  model: string;
  year: number;
  price: number;
  location: string;
  dealer: string;
  dealerPhone?: string;
  category: 'wheel-loaders' | 'aggregates' | 'accessories' | 'boat-engines';
  subcategory?: string;
  image: string;
  description: string;
  longDescription?: string;
  specifications?: {
    power?: string;
    weight?: string;
    fuel?: string;
    engine?: string;
    liftCapacity?: string;
    liftHeight?: string;
    topSpeed?: string;
    gearbox?: string;
    chassis?: string;
    cabinType?: string;
    workingHours?: string;
    additionalHydraulics?: string;
    ceMark?: string;
    complianceDeclaration?: string;
    maintenanceContract?: string;
    annualFee?: string;
    brand?: string;
    motorType?: string;
    voltage?: string;
    cooling?: string;
    certification?: string;
    warranty?: string;
    [key: string]: string | undefined;
  };
  modelVariants?: Array<{
    model: string;
    cylinders: string;
    power: string;
    price: number;
  }>;
  standardEquipment?: string[];
  additionalOptions?: string[];
  websiteLinks?: string[];
  memberInfo?: string;
  keywords?: string[];
  featured?: boolean;
  inStock?: boolean;
  deliveryInfo?: string;
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
    dealerPhone: '90033402',
    category: 'wheel-loaders',
    subcategory: 'hjullaster',
    image: '/products/1.avif',
    description: 'HZM 811 løfter 1000 kg og er tilpasset arbeid på gårder og mindre anlegg. En meget smidig maskin spesialtilpasset brøyting, palleløfting og masseforflytning.',
    longDescription: 'HZM 811 løfter 1000 kilo og er tilpasset arbeid på gårder og mindre anlegg. Den er en meget smidig maskin som er spesialtilpasset brøyting, palleløfting og masseforflytning.\n\nMaskinen er rammestyrt med fire hjulstrekk og høy og lavgir. Den driftes av converter. Motoren har fire sylindret. Hytta leveres med oppvarming og defroster, vindusvisker, justerbart ratt og førerstol med sikkerhetsbelte. God utsikt i alle retninger i tillegg til ryggekamera med alarm. Motorvarmer 220 V.\n\nKort og godt: En meget driftssikker maskin for norske forhold.',
    specifications: {
      power: '25 hk',
      weight: '2 700 kg',
      fuel: 'Diesel',
      engine: '4-sylindret Euro 5',
      liftCapacity: '1 000 kg',
      liftHeight: '3,46 m',
      topSpeed: '20 km/t',
      gearbox: 'Hydraulisk converter',
      chassis: 'Leddet rammestyrt',
      cabinType: 'Lukket luksus hytte',
      workingHours: 'Ikke oppgitt',
      additionalHydraulics: 'Ja - totalt 4 funksjoner',
      ceMark: 'Ja',
      complianceDeclaration: 'Ja',
      maintenanceContract: 'Nei',
      annualFee: 'Les mer'
    },
    standardEquipment: [
      'Standard skuffe',
      'Joystick og EL gir, høy og lavserie',
      'Konstant firehjulsdrift',
      'Trima Quick shift av redskap',
      'Skivebremser alle hjul',
      'Hydraulisk converter',
      'Flyt funksjon',
      'Ekstra hydraulikk, totalt fire funksjoner',
      'Kjøre/arbeidslys forover og bakover',
      'Luksus hytte med ryggekamera og varmeapparat',
      'Justerbart ratt og sete med setebelte',
      'Traktor dekk (Grass dekk er ekstrautstyr)',
      'Lås for løft og styresylinder',
      'Hydraulisk trykk sjekk system',
      'Varta batteri type vinter',
      'Hovedstrøms bryter',
      'Motorvarmer 220V'
    ],
    keywords: ['Sino', 'Everun', 'hjullaster'],
    featured: true,
    inStock: false,
    deliveryInfo: 'Maskiner ventes inn i juli. Flere modeller på vei inn!'
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
    subcategory: 'hjullaster',
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
    subcategory: 'kompaktlaster',
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
    subcategory: 'kompaktlaster',
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
    subcategory: 'kompaktlaster',
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
    dealerPhone: '90033402',
    category: 'wheel-loaders',
    subcategory: 'hjullaster',
    image: '/products/6.avif',
    description: 'HZM 811 løfter 1000 kg og er tilpasset arbeid på gårder og mindre anlegg. En meget smidig maskin spesialtilpasset brøyting, palleløfting og masseforflytning.',
    longDescription: 'HZM 811 løfter 1000 kilo og er tilpasset arbeid på gårder og mindre anlegg. Den er en meget smidig maskin som er spesialtilpasset brøyting, palleløfting og masseforflytning.\n\nMaskinen er rammestyrt med fire hjulstrekk og høy og lavgir. Den driftes av converter. Motoren har fire sylindret. Hytta leveres med oppvarming og defroster, vindusvisker, justerbart ratt og førerstol med sikkerhetsbelte. God utsikt i alle retninger i tillegg til ryggekamera med alarm. Motorvarmer 220 V.\n\nKort og godt: En meget driftssikker maskin for norske forhold.',
    specifications: {
      power: '25 hk',
      weight: '2 700 kg',
      fuel: 'Diesel',
      engine: '4-sylindret Euro 5',
      liftCapacity: '1 000 kg',
      liftHeight: '3,46 m',
      topSpeed: '20 km/t',
      gearbox: 'Hydraulisk converter',
      chassis: 'Leddet rammestyrt',
      cabinType: 'Lukket luksus hytte',
      workingHours: 'Ikke oppgitt',
      additionalHydraulics: 'Ja - totalt 4 funksjoner',
      ceMark: 'Ja',
      complianceDeclaration: 'Ja',
      maintenanceContract: 'Nei',
      annualFee: 'Les mer'
    },
    standardEquipment: [
      'Standard skuffe',
      'Joystick og EL gir, høy og lavserie',
      'Konstant firehjulsdrift',
      'Trima Quick shift av redskap',
      'Skivebremser alle hjul',
      'Hydraulisk converter',
      'Flyt funksjon',
      'Ekstra hydraulikk, totalt fire funksjoner',
      'Kjøre/arbeidslys forover og bakover',
      'Luksus hytte med ryggekamera og varmeapparat',
      'Justerbart ratt og sete med setebelte',
      'Traktor dekk (Grass dekk er ekstrautstyr)',
      'Lås for løft og styresylinder',
      'Hydraulisk trykk sjekk system',
      'Varta batteri type vinter',
      'Hovedstrøms bryter',
      'Motorvarmer 220V'
    ],
    keywords: ['Sino', 'Everun', 'hjullaster'],
    inStock: false,
    deliveryInfo: 'Maskiner ventes inn i juli. Flere modeller på vei inn!'
  }
];

// Aggregates from finn.no
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
    description: 'Kraftig dieselaggregat med Prime KVA 15 og Standby KVA 16,5. Pålitelig strømkilde for arbeidsplasser.',
    longDescription: 'Profesjonelt dieselaggregat YT 15DS for krevende bruksområder.\n\nAggregatet leverer Prime KVA 15 og Standby KVA 16,5, med Prime strøm på 22A og Standby på 24A. Driftsikker 3-fase strømforsyning med 230/400V og 50 Hz.\n\nMotoren er en kraftig 4-sylindret vannavkjølt dieselmotor på 15,5 kW som kjører på 1500 RPM. Integrert dieseltank på 74 liter sikrer lang driftstid. Utstyrt med selvstarter for enkel oppstart.\n\nKompakte dimensjoner: 168x80x104 cm (LxBxH)\nNetto vekt: 735 kg',
    specifications: {
      power: '15,5 kW',
      primeKVA: '15 KVA',
      standbyKVA: '16,5 KVA',
      primeAmpere: '22 A',
      standbyAmpere: '24 A',
      voltage: '230/400 V',
      phase: '3-fase',
      frequency: '50 Hz',
      rpm: '1500 RPM',
      engine: '4-sylindret vannavkjølt',
      fuelTank: '74 liter',
      dimensions: '168x80x104 cm',
      weight: '735 kg',
      starter: 'Selvstarter',
      condition: 'Ny',
      fuel: 'Diesel'
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
    description: 'Kraftig dieselaggregat med Prime KVA 15 og Standby KVA 16,5. Pålitelig strømkilde for arbeidsplasser.',
    longDescription: 'Profesjonelt dieselaggregat YT 15DS for krevende bruksområder.\n\nAggregatet leverer Prime KVA 15 og Standby KVA 16,5, med Prime strøm på 22A og Standby på 24A. Driftsikker 3-fase strømforsyning med 230/400V og 50 Hz.\n\nMotoren er en kraftig 4-sylindret vannavkjølt dieselmotor på 15,5 kW som kjører på 1500 RPM. Integrert dieseltank på 74 liter sikrer lang driftstid. Utstyrt med selvstarter for enkel oppstart.\n\nKompakte dimensjoner: 168x80x104 cm (LxBxH)\nNetto vekt: 735 kg',
    specifications: {
      power: '15,5 kW',
      primeKVA: '15 KVA',
      standbyKVA: '16,5 KVA',
      primeAmpere: '22 A',
      standbyAmpere: '24 A',
      voltage: '230/400 V',
      phase: '3-fase',
      frequency: '50 Hz',
      rpm: '1500 RPM',
      engine: '4-sylindret vannavkjølt',
      fuelTank: '74 liter',
      dimensions: '168x80x104 cm',
      weight: '735 kg',
      starter: 'Selvstarter',
      condition: 'Ny',
      fuel: 'Diesel'
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
    description: 'Kraftig dieselaggregat med Prime KVA 15 og Standby KVA 16,5. Pålitelig strømkilde for arbeidsplasser.',
    longDescription: 'Profesjonelt dieselaggregat YT 15DS for krevende bruksområder.\n\nAggregatet leverer Prime KVA 15 og Standby KVA 16,5, med Prime strøm på 22A og Standby på 24A. Driftsikker 3-fase strømforsyning med 230/400V og 50 Hz.\n\nMotoren er en kraftig 4-sylindret vannavkjølt dieselmotor på 15,5 kW som kjører på 1500 RPM. Integrert dieseltank på 74 liter sikrer lang driftstid. Utstyrt med selvstarter for enkel oppstart.\n\nKompakte dimensjoner: 168x80x104 cm (LxBxH)\nNetto vekt: 735 kg',
    specifications: {
      power: '15,5 kW',
      primeKVA: '15 KVA',
      standbyKVA: '16,5 KVA',
      primeAmpere: '22 A',
      standbyAmpere: '24 A',
      voltage: '230/400 V',
      phase: '3-fase',
      frequency: '50 Hz',
      rpm: '1500 RPM',
      engine: '4-sylindret vannavkjølt',
      fuelTank: '74 liter',
      dimensions: '168x80x104 cm',
      weight: '735 kg',
      starter: 'Selvstarter',
      condition: 'Ny',
      fuel: 'Diesel'
    },
    inStock: true
  }
];

// Accessories
export const accessories: Product[] = [
  {
    id: 'snow-plow-blade-1',
    name: 'Brøyteskjær',
    model: 'Diagonalblad',
    year: 2025,
    price: 24000,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    dealerPhone: '90033402',
    category: 'accessories',
    image: '/t1.avif',
    description: 'Brøyteskjær 2,0 og 2,2 meter fra en av Europas ledende produsenter. Kraftig hydraulikk for høyre og venstre sving.',
    longDescription: 'Brøyteskjær 2,0 og 2,2 meter fra en av Europas ledende produsenter.\n\nKraftig hydraulikk for høyre og venstre sving.\n\nFlytsystem for enkel nivåregulering\n\nKraftige fjærer\n\nTrima brakett\n\nKraftig gummi "slitestål"',
    specifications: {
      condition: 'Ny',
      hydraulics: 'Kraftig hydraulikk for høyre og venstre sving',
      floatSystem: 'Ja - for enkel nivåregulering',
      springs: 'Kraftige fjærer',
      bracket: 'Trima brakett',
      edge: 'Kraftig gummi slitestål'
    },
    modelVariants: [
      { model: 'Diagonalblad 2,0 meter', cylinders: '', power: '', price: 24000 },
      { model: 'Diagonalblad 2,2 meter', cylinders: '', power: '', price: 26000 }
    ],
    keywords: ['Snøskjær', 'brøyteskjær', 'vikeplog', 'frontskjær', 'plog', 'skjær'],
    deliveryInfo: 'På lager for omgående levering',
    featured: false,
    inStock: true
  }
];

// Boat engines
export const boatEngines: Product[] = [
  {
    id: 'td-power-engines',
    name: 'TD-Power 20 - 46 hk',
    model: 'TDME Serie',
    year: 2024,
    price: 74900,
    location: 'Bø i Telemark',
    dealer: 'Telemark Trade AS',
    dealerPhone: '90033402',
    category: 'boat-engines',
    subcategory: 'td-power',
    image: '/services/td-power.jpg',
    description: 'Norges billigste båtmotor! Komplett motor med gir, instrumenter og ledningsnett. Fra 27-110 hk.',
    longDescription: 'Norges billigste båtmotor!!!! Kampanjepriser hele året.\n\nVi har motorer på lager for omgående levering. Komplett motor med gir, instrumenter og ledningsnett. Det beste alternativ til en litt eldre båt som det er verdt å ta vare på.\n\nVi har over 15 års erfaring og har levert over 600 motorer til det norske markedet. Vi fører fullt delelager og gir to års garanti. Ved spesielle behov kan vi spesial tilpasse motoren til deg.\n\nKan også levere større motorer på bestilling.\n\nSe også Hyundai SeasAll. Topp moderne dieselmotorer på 200, 270 og opp til 700 hester. Motorene leveres komplett med drev eller vanlig gir.',
    specifications: {
      brand: 'TD-Power',
      motorType: 'Innenbords',
      power: '27-110 HK',
      fuel: 'Diesel',
      engine: '3-4 sylindret',
      voltage: '12V',
      cooling: 'Ferskvannskjølt med impellerpumpe',
      gearbox: 'Mekanisk og hydraulisk',
      certification: 'CE godkjent 2003/44/EC (2010 direktiv)',
      warranty: '2 års garanti'
    },
    modelVariants: [
      { model: 'TDME 327 CR', cylinders: '3 cyl', power: '27 hk', price: 74900 },
      { model: 'TDME 332', cylinders: '3 cyl', power: '32 hk', price: 74900 },
      { model: 'TDME 446', cylinders: '4 cyl', power: '46 hk', price: 84900 },
      { model: 'TDME 95-4B2', cylinders: '4 cyl', power: '95 hk', price: 149900 },
      { model: 'TDME 110-4B2', cylinders: '4 cyl', power: '110 hk', price: 159900 }
    ],
    standardEquipment: [
      'Gir (mekanisk og hydraulisk)',
      'Instrumentpanel med nøkkel',
      'Vema instrumenter',
      'Fire meter kabel',
      '12V startmotor og dynamo',
      'Ferskvannskjølt motor med impellerpumpe for sjøvannskjøling',
      'Forvarming for vinterstart',
      'Elektrisk start og stopp',
      'Ledningsnett komplett'
    ],
    additionalOptions: [
      'ZF gir med slurefunksjon (tillegg)',
      'Spesialtilpasning etter behov'
    ],
    deliveryInfo: 'Motorer på lager for omgående levering. Vi sender over hele landet!',
    websiteLinks: [
      'www.telemark-trade.no',
      'td-power.com/en/product1.asp',
      'www.timray.nl'
    ],
    memberInfo: 'Selges av et medlem av Norboat. Når du kjøper et produkt eller en tjeneste fra et Norboat-medlem, vet du at de er tilknyttet en handelsorganisasjon som arbeider for å skape best mulig rammeverk for båtbransjen og båtferdsel basert på trygt båteierskap.',
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
    subcategory: 'hyundai',
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
    subcategory: 'aquamot',
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
export const allProducts: Product[] = [...wheelLoaders, ...aggregates, ...accessories, ...boatEngines];

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
    name: 'Aggregater',
    description: 'Dieselaggregater for strømforsyning på arbeidsplassen',
    image: '/extension/1.avif',
    productCount: aggregates.length
  },
  {
    id: 'accessories',
    name: 'Tilbehør',
    description: 'Tilbehør og ekstrautstyr for hjullastere og aggregater',
    image: '/extension/2.avif',
    productCount: accessories.length
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