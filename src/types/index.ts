export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'Construction' | 'Design & Planning' | 'Interiors & Renovation';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | '3D Elevation' | 'Interiors';
  type: string;
  location: string;
  area: string;
  floors: string;
  image: string;
  highlights: string[];
  engineerNote: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  project: string;
  location: string;
  comment: string;
  rating: number;
}

export interface BlueprintPlan {
  id: string;
  title: string;
  dimensions: string;
  totalArea: string;
  facing: string;
  rooms: string[];
  features: string[];
  blueprintImg: string;
}

export interface CostEstimateInput {
  builtUpArea: number;
  packageType: 'standard' | 'premium' | 'luxury';
  floors: number;
  projectType: 'residential' | 'commercial';
}
