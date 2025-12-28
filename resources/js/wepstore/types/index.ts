// Common Types and Interfaces

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  recommended: boolean;
  theme: 'blue' | 'white';
  limits: PricingLimit[];
  features: string[];
}

export interface PricingLimit {
  val: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    snapchat?: string;
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
}

export interface NavDropdownItem {
  icon: React.ReactNode;
  label: string;
  link?: string;
}

// Prop Types
export interface BrandLogoProps {
  lightMode: boolean;
}

export interface ClientLogoProps {
  name: string;
  index: number;
}

