export type FlavorCategory = 
  | "all" 
  | "classic" 
  | "seasonal" 
  | "sundaes" 
  | "eggless-vegan" 
  | "thick-shakes";

export interface Flavor {
  id: string;
  name: string;
  category: FlavorCategory;
  tagline: string;
  description: string;
  flavorNotes: string[];
  rating: number;
  isBestseller?: boolean;
  isSeasonal?: boolean;
  isEggless?: boolean;
  isVegan?: boolean;
  image: string;
  colorAccent: string;
  pricePerScoop: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  favoriteFlavor: string;
  verifiedVisit: boolean;
}

export interface CateringPackage {
  id: string;
  name: string;
  servesCount: string;
  priceStartingAt: string;
  description: string;
  includedItems: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface StoreInfo {
  brandName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    pincode: string;
    landmark?: string;
  };
  timings: {
    weekdays: string;
    weekends: string;
    openStatusText: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    googleMaps: string;
  };
}
