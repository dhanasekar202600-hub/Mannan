import { ServiceItem, ProjectItem, TestimonialItem, BlueprintPlan } from '../types';

export const COMPANY_DETAILS = {
  name: 'SMB BUILDERS',
  tagline: 'Engineering Excellence · Architectural Innovation · Turnkey Execution',
  chiefEngineer: 'Sabarimannan, M.E., Civil',
  phone: '9994403060',
  phoneDisplay: '+91 99944 03060',
  email: 'mannan123@gmail.com',
  whatsappUrl: 'https://wa.me/919994403060?text=Hello%20Er.%20Sabarimannan,%20I%20visited%20SMB%20BUILDERS%20website%20and%20would%20like%20to%20discuss%20a%20construction%20project.',
  freeBlueprintWhatsappUrl: 'https://wa.me/919994403060?text=Hello%20Er.%20Sabarimannan,%20I%20would%20like%20to%20claim%20the%20FREE%20initial%20blueprint%20and%20design%20consultation%20for%20my%20plot.',
  experienceYears: '15+',
  projectsCompleted: '120+',
  satisfactionRate: '100%',
  officeHours: 'Monday – Saturday: 8:30 AM – 7:30 PM (Sunday by Appointment)',
  specialty: 'Civil Construction, Architectural Planning, 2D Blueprints, 3D Elevations & Turnkey Execution',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-construction',
    number: '01',
    title: 'Complete Residential House Construction',
    category: 'Construction',
    shortDesc: 'Turnkey residential building from foundation soil testing to roof casting, plastering, and pristine handover.',
    fullDesc: 'End-to-end residential construction for modern individual villas, duplex houses, and multi-storey residences. Led directly by Chief Engineer Sabarimannan, M.E., Civil, ensuring rigorous adherence to IS code structural standards, certified 550D TMT reinforcement, and premium 53-grade cement.',
    deliverables: [
      'Soil bearing capacity testing & foundation design',
      'RCC column-beam frame construction with seismic compliance',
      'Solid/aerated block masonry with crack-resistant plastering',
      'Complete waterproofing on basements, sunken slabs & terraces',
      'Timely stage-wise milestone handovers with photo documentation'
    ],
    icon: 'Home',
    featured: true
  },
  {
    id: 'commercial-construction',
    number: '02',
    title: 'Commercial Building Construction',
    category: 'Construction',
    shortDesc: 'High-strength commercial office spaces, retail complexes, shopping plazas, and institutional facilities.',
    fullDesc: 'Specialized civil execution for commercial developers and business owners requiring high floor-to-ceiling heights, heavy live-load structural design, basement vehicle parking, and glass curtain wall integration.',
    deliverables: [
      'Heavy-duty industrial & commercial RCC structural design',
      'Fire-safety compliance & municipal clearance coordination',
      'Lift shaft construction & utility ducts execution',
      'Commercial grade exterior glazing and ACP facade integration',
      'High-traffic durable vitrified / granite flooring'
    ],
    icon: 'Building2',
    featured: true
  },
  {
    id: 'architectural-planning',
    number: '03',
    title: 'Architectural Planning & Building Designs',
    category: 'Design & Planning',
    shortDesc: 'Functional spatial layouts optimized for natural cross-ventilation, sunlight, and Vaastu Shastra compliance.',
    fullDesc: 'Custom architectural master plans that convert your plot dimensions into inspiring, practical spaces. We balance contemporary aesthetics with efficient space utilization so every square foot delivers maximum comfort.',
    deliverables: [
      'Comprehensive master site layout & zoning',
      'Strict Vaastu orientation for kitchen, master suite & entrance',
      'Passive solar lighting and natural cross-ventilation planning',
      'Municipal corporation sanction drawing sets & approvals',
      'Circulation and spatial privacy zoning'
    ],
    icon: 'Compass',
    featured: true
  },
  {
    id: 'structural-engineering',
    number: '04',
    title: 'Structural Engineering & Consultation',
    category: 'Design & Planning',
    shortDesc: 'Rigorous civil analysis, load-bearing calculations, seismic design, and structural safety certification.',
    fullDesc: 'Handled personally by Sabarimannan, M.E., Civil. We design efficient reinforcement details that prevent structural over-design (saving unnecessary steel costs) while guaranteeing total structural stability for decades.',
    deliverables: [
      'Seismic zone structural load calculations (ETABS / STAAD)',
      'Detailed bar bending schedules (BBS) for beams, columns & footings',
      'Retaining wall & underground sump structural engineering',
      'Structural stability certificates for loan & government sanctions',
      'Existing building structural audit & load capacity vetting'
    ],
    icon: 'ShieldCheck',
    featured: true
  },
  {
    id: 'interior-design-execution',
    number: '05',
    title: 'Interior Design & Complete Interior Execution',
    category: 'Interiors & Renovation',
    shortDesc: 'Bespoke modular kitchens, false ceiling lighting, wardrobe woodwork, and luxury wall treatments.',
    fullDesc: 'Seamless fusion of design and woodworking craftsmanship. From conceptual 3D mood boards to factory-finish modular cabinetry, cove lighting, and luxury stone finishes, we deliver complete ready-to-live interiors.',
    deliverables: [
      'Modular kitchens with acrylic/laminate shutters & quartz slabs',
      'Designer POP/gypsum false ceilings with hidden warm LED profiles',
      'Custom floor-to-ceiling bedroom wardrobes and vanity storage',
      'TV console wall panelling with fluted timber & acoustic slates',
      'Turnkey handover with premium electrical fixtures & fittings'
    ],
    icon: 'Sparkles',
    featured: true
  },
  {
    id: 'exterior-elevation',
    number: '06',
    title: 'Exterior Elevation & Modern House Designs',
    category: 'Design & Planning',
    shortDesc: 'Contemporary front elevations featuring stone cladding, louvers, cantilevered balconies, and architectural lighting.',
    fullDesc: 'Transform standard building faces into breathtaking street landmarks. Our exterior styling incorporates durable weather-resistant materials, vertical wooden louvers, textured exterior stone, and concealed ambient lighting.',
    deliverables: [
      'Custom modern, minimalist, or contemporary elevation options',
      'Material schedule including HPL sheets, louvers & exterior paints',
      'Perimeter boundary wall & main gate architectural integration',
      'Nighttime facade lighting and landscape illumination design',
      'Weather-resistant exterior cladding detailing'
    ],
    icon: 'Layers'
  },
  {
    id: 'blueprints-drawings',
    number: '07',
    title: '2D Architectural Drawings & Detailed Blueprints',
    category: 'Design & Planning',
    shortDesc: 'Precision CAD drafting covering floor plans, plumbing lines, electrical schedules, and sectional views.',
    fullDesc: 'Clean, dimensionally exact working drawings for on-site masons, electricians, and plumbers. Eliminates on-site errors and ensures contractors execute the vision with millimeter accuracy.',
    deliverables: [
      'Comprehensive 2D working floor plans with wall thicknesses',
      'Plumbing layout with water supply, drainage & trap locations',
      'Electrical schematic with conduit paths, switchboards & power points',
      'Cross-sectional elevations and staircase engineering drawings',
      'Door & window opening schedules with lintel details'
    ],
    icon: 'FileText',
    featured: true
  },
  {
    id: 'free-blueprint-offer',
    number: '08',
    title: 'FREE Initial Blueprint & Design Consultation',
    category: 'Design & Planning',
    shortDesc: 'Complimentary preliminary 2D floor plan and engineering consultation for all prospective homeowners.',
    fullDesc: 'We believe every family deserves an engineer-approved vision before committing life savings. Submit your plot dimensions and facing, and Chief Engineer Sabarimannan will personally prepare an initial 2D conceptual layout free of charge.',
    deliverables: [
      'Zero-cost initial 2D spatial arrangement of rooms',
      'Vaastu orientation check for your specific plot direction',
      'Direct 30-minute phone or in-person engineering consult',
      'Preliminary itemized construction cost estimation',
      'Zero obligation — completely transparent service'
    ],
    icon: 'Gift',
    featured: true
  },
  {
    id: 'visualization-3d',
    number: '09',
    title: '3D Building Visualization & Walkthrough Explanations',
    category: 'Design & Planning',
    shortDesc: 'Photorealistic day and twilight 3D renderings and walkthroughs before breaking ground.',
    fullDesc: 'Eliminate all guesswork. Walk through your future home virtually before the first brick is laid. Experience exact room volumes, window view lines, material finishes, and lighting ambiance.',
    deliverables: [
      'Photorealistic exterior 3D renders from multiple camera angles',
      'Daytime sunlight and dusk architectural lighting simulations',
      'Virtual walkthrough video explanations of circulation spaces',
      'Material finish options comparison (colors, textures, stones)',
      'High-resolution client presentation renders'
    ],
    icon: 'Eye'
  },
  {
    id: 'renovation-remodeling',
    number: '10',
    title: 'Renovation & Remodeling',
    category: 'Interiors & Renovation',
    shortDesc: 'Structural strengthening, additional floor extensions, facade modernization, and bathroom remodels.',
    fullDesc: 'Give your aging property new life. Whether you need an additional floor added safely to existing foundations, layout reconfiguration, or a complete modern elevation facelift, our civil team delivers safely.',
    deliverables: [
      'Structural load assessment of existing columns & foundation',
      'Chemical anchoring for new column extensions & roof slabs',
      'Old plaster removal, micro-concrete reinforcement & replastering',
      'Modern bathroom remodeling with concealed plumbing & dry zones',
      'Complete facade and terrace waterproofing upgrades'
    ],
    icon: 'Wrench'
  },
  {
    id: 'turnkey-construction',
    number: '11',
    title: 'Turnkey Construction Services',
    category: 'Construction',
    shortDesc: 'Single-window responsibility from plan approval, material procurement, civil works to final key handover.',
    fullDesc: 'Stress-free building for busy professionals and NRIs. We handle design, government permissions, material procurement, on-site civil supervision, interior carpentry, and final deep cleaning under one fixed contract.',
    deliverables: [
      'Fixed-cost transparent contract with detailed material brands',
      'Dedicated on-site civil engineer supervision every working day',
      'Weekly video and photo progress reports sent to your WhatsApp',
      'Milestone-linked escrow style payment structure',
      'Ready-to-move-in keys handover with all utility connections live'
    ],
    icon: 'KeyRound',
    featured: true
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'The Grand Crest Luxury Villa',
    category: 'Residential',
    type: 'Turnkey Residential Villa (G+2)',
    location: 'Coimbatore / Erode Highway',
    area: '4,850 sq.ft',
    floors: '3 Levels',
    image: '/src/assets/images/hero_modern_villa_1793963645933.jpg',
    highlights: [
      'Cantilevered master suite with floor-to-ceiling acoustic glass',
      'Reflecting water pool with natural granite decking',
      'Full seismic Zone III structural engineering by Sabarimannan, M.E.',
      'Concealed VRV air conditioning & solar roof integration'
    ],
    engineerNote: 'Engineered with deep pile foundations and post-tensioned cantilever beams to achieve a 12-foot unsupported overhang without column intrusion.'
  },
  {
    id: 'proj-2',
    title: 'Contemporary Duplex Residence',
    category: '3D Elevation',
    type: '3D Elevation & Turnkey Civil Works',
    location: 'Anna Nagar West Extension',
    area: '3,200 sq.ft',
    floors: 'G+1 Duplex',
    image: '/src/assets/images/elevation_3d_modern_1793963645728.jpg',
    highlights: [
      'Textured dry-stacked slate stone cladding',
      'Continuous warm LED perimeter cove illumination',
      'Double-height formal living with automated skylight',
      'Custom 2-car covered portico with perforated pergola'
    ],
    engineerNote: 'Modelled in photorealistic 3D rendering with day/night simulations prior to civil casting, allowing the client to select optimum stone textures and lighting cues.'
  },
  {
    id: 'proj-3',
    title: 'The Vista Commercial Hub',
    category: 'Commercial',
    type: 'Commercial Office & Retail Plaza',
    location: 'Prime Ring Road Commercial Zone',
    area: '14,600 sq.ft',
    floors: 'G+4 Floors',
    image: '/src/assets/images/commercial_building_modern_1793963648145.jpg',
    highlights: [
      'High-span steel-composite frame allowing 30ft column-free retail floor',
      'Double-glazed low-E curtain wall facade saving 28% HVAC load',
      'Basement automated mechanical car parking system',
      'Municipal fire-fighting and emergency evacuation compliant'
    ],
    engineerNote: 'Designed and executed for rapid commercial occupancy with pre-engineered structural steel columns and composite deck slabs, delivered 45 days ahead of schedule.'
  },
  {
    id: 'proj-4',
    title: 'Bespoke Architectural Interior & Living Suite',
    category: 'Interiors',
    type: 'Complete Luxury Interior Execution',
    location: 'Prestige Meadows Estate',
    area: '2,600 sq.ft Interior',
    floors: 'Single Level Penthouse',
    image: '/src/assets/images/luxury_interior_living_1793963647023.jpg',
    highlights: [
      'Custom fluted American walnut acoustic wall panelling',
      'Seamless Italian Botticino marble flooring with brass inlays',
      'Concealed perimeter LED lighting with smart mood dimming',
      'Open-plan dining with solid timber 8-seater table'
    ],
    engineerNote: 'Integrated precision carpentry with concealed electrical conduit design, ensuring no visible cables while retaining full maintenance access.'
  }
];

export const BLUEPRINT_PLANS: BlueprintPlan[] = [
  {
    id: 'plan-1',
    title: '3BHK Contemporary Duplex Villa',
    dimensions: '30 ft × 50 ft (1,500 sq.ft Plot)',
    totalArea: '2,450 sq.ft Built-Up',
    facing: 'North Facing (Strict Vaastu Compliance)',
    rooms: [
      'Ground Floor: Portico, Foyer, Living Room, Dining, Kitchen with Utility, Master Bedroom with En-Suite, Powder Room',
      'First Floor: 2 Bedrooms with Attached Baths, Family Lounge, Front Open Terrace, Study Room',
      'Terrace: Covered Staircase Room, Solar Inverter Room, Landscaped Rooftop'
    ],
    features: [
      'Kitchen positioned strictly in South-East (Agni Corner)',
      'Master bedroom in South-West (Kubera Corner) for stability',
      'North-East Pooja space with natural morning light',
      'Full structural column grid aligned for cost-effective beam spans'
    ],
    blueprintImg: '/src/assets/images/blueprint_architectural_cad_1793963646572.jpg'
  },
  {
    id: 'plan-2',
    title: '4BHK Luxury Family Residence',
    dimensions: '40 ft × 60 ft (2,400 sq.ft Plot)',
    totalArea: '3,800 sq.ft Built-Up',
    facing: 'East Facing (Auspicious Morning Sunlight)',
    rooms: [
      'Ground Floor: 2-Car Parking, Double-Height Living, Dining Area, Semi-Open Kitchen with Pantry, Guest Bedroom, Parents Bedroom with Elderly-Friendly Bath',
      'First Floor: Master Suite with Walk-In Closet & Balcony, Kids Bedroom, Home Theatre Room, Utility Balcony',
      'Terrace: Gymnasium Room & Pergola Sit-Out'
    ],
    features: [
      'Main entrance placed in auspicious East-of-North-East zone',
      'Double-height central living ensures cool convective airflow',
      'Zero dead-space hallway design maximizing carpet area efficiency',
      'Detailed electrical & sanitary conduit routing included'
    ],
    blueprintImg: '/src/assets/images/blueprint_architectural_cad_1793963646572.jpg'
  },
  {
    id: 'plan-3',
    title: 'Commercial Multi-Tenancy Floor Plan',
    dimensions: '50 ft × 80 ft (4,000 sq.ft Plot)',
    totalArea: '12,500 sq.ft Across 3 Floors',
    facing: 'Main Road Frontage',
    rooms: [
      'Ground Floor: Showroom / Retail Space with 12ft clear height, Customer Toilets',
      'First & Second Floors: Flexible Open-Plan IT / Corporate Office Layout, Conference Room, Pantry, Server Room',
      'Core: 8-Passenger Elevator, Fire Escape Staircase, Utility Shafts'
    ],
    features: [
      'Column spacing optimized for flexible dry-wall partitioning',
      'Meets all fire brigade turning radius and emergency egress codes',
      'Dedicated electrical transformer & diesel generator yard space',
      'Engineered for maximum natural perimeter daylighting'
    ],
    blueprintImg: '/src/assets/images/blueprint_architectural_cad_1793963646572.jpg'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. K. Ravichandran, M.D.',
    role: 'Homeowner · 4BHK Villa',
    project: 'Grand Villa at Sai Nagar',
    location: 'Coimbatore',
    comment: 'Having Er. Sabarimannan, M.E., Civil handle our villa made all the difference. Most contractors take shortcuts with steel and cement, but Sabarimannan verified every single batch of 550D TMT and tested concrete cube samples. He gave us a free preliminary blueprint, stuck to the exact timeline, and handed over the keys right on schedule. Truly outstanding engineering leadership.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'S. Shanmugam',
    role: 'Managing Director · Shanmugam Enterprises',
    project: 'Commercial Complex (G+3)',
    location: 'Erode',
    comment: 'We entrusted SMB BUILDERS with our 11,000 sq.ft commercial showroom complex. Sabarimannan’s structural calculations saved us over ₹4 Lakhs by eliminating redundant reinforcement while maintaining full earthquake safety. The exterior elevation is the talk of the street. Honest, transparent, and technically brilliant.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Mrs. Jayanthi & Anand Kumar',
    role: 'Homeowners · Duplex House',
    project: 'Contemporary Duplex (3,100 sq.ft)',
    location: 'Tirupur',
    comment: 'We live in Bangalore and were building our parents’ dream home in Tamil Nadu. The weekly WhatsApp video reports and transparent milestone billing gave us complete peace of mind. The free 2D blueprint consultation opened our eyes to Vaastu corrections that previous drafts had missed. Highly recommended!',
    rating: 5
  }
];

export const PACKAGES = [
  {
    id: 'standard',
    name: 'Standard Package',
    ratePerSqFt: 1850,
    idealFor: 'Budget-conscious independent homes & rental units',
    steel: 'ISI Certified Fe 500 TMT Steel',
    cement: 'UltraTech / Dalmia / Ramco (43 & 53 Grade)',
    flooring: '2x2 Premium Vitrified Tiles (₹45/sq.ft value)',
    woodwork: 'Teak wood main frame & flush doors with mortise locks',
    plumbing: 'Finolex / Supreme PVC & Ashirvad CPVC, Parryware sanitary',
    elevation: 'Standard modern facade with apex exterior emulsion paint',
    features: [
      'Complete RCC frame structure',
      '6" solid concrete block masonry',
      '10-year structural stability warranty',
      'Free initial 2D blueprint'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    ratePerSqFt: 2250,
    popular: true,
    idealFor: 'High-quality family residences & modern duplex villas',
    steel: 'Tata Tiscon / JSW Neosteel Fe 550D TMT',
    cement: 'UltraTech Super / Coromandel King (53 Grade)',
    flooring: '4x2 High-Gloss Glazed Vitrified Tiles (₹80/sq.ft value)',
    woodwork: 'First-quality Teak wood entrance door & country wood interior frames',
    plumbing: 'Kohler / Jaquar sanitaryware and concealed divertors',
    elevation: 'Architectural 3D elevation with stone texture & exterior louvers',
    features: [
      'Engineered earthquake-resistant design',
      'Double coat waterproof plastering on all exterior surfaces',
      'Free 2D blueprints + 3D elevation renders',
      'Dedicated site engineer supervision'
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury Architectural Package',
    ratePerSqFt: 2850,
    idealFor: 'Luxury custom villas, designer bungalows & executive residences',
    steel: 'Tata Tiscon Super-Ductile TMT Fe 550D',
    cement: 'UltraTech Weather Plus / ACC Concrete+ Special',
    flooring: 'Italian Marble / Large Format Porcelain Slabs (₹160+/sq.ft)',
    woodwork: 'Burma Teak entrance & solid engineered timber doors throughout',
    plumbing: 'Grohe / Kohler / Toto concealed wall-hung fixtures',
    elevation: 'Custom architectural facade with HPL sheets, glass railings & lighting',
    features: [
      'Full interior false ceiling with LED ambient cove lighting included',
      'Premium modular kitchen carcass provision',
      'Complete 3D walkthrough & full structural blueprint set',
      'Extended 15-year structural warranty & 1-year free maintenance'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Led by Sabarimannan, M.E., Civil',
    desc: 'Unlike ordinary contractors, your project is planned and supervised directly by a Master of Engineering Civil specialist.',
    icon: 'GraduationCap'
  },
  {
    title: 'FREE 2D Blueprint & Consultation',
    desc: 'Get an engineer-crafted preliminary floor plan and Vaastu analysis before spending a single rupee on construction.',
    icon: 'Gift'
  },
  {
    title: 'Lab-Tested Certified Materials',
    desc: 'Strict quality control with on-site slump tests, cube strength tests, and certified Fe 550D steel.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Milestone-Linked Transparent Payments',
    desc: 'Zero surprise bills. Payments are strictly linked to clear civil milestones (Foundation, Lintel, Roof, Plastering, Handover).',
    icon: 'CreditCard'
  },
  {
    title: 'Photorealistic 3D Visualizations',
    desc: 'Preview every angle of your home exterior and interior before casting, ensuring zero regret modifications later.',
    icon: 'Box'
  },
  {
    title: '10-Year Structural Guarantee',
    desc: 'Complete peace of mind with formal structural stability certification and post-construction maintenance backup.',
    icon: 'Shield'
  }
];
