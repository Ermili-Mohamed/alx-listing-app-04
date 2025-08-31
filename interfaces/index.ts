export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface Review {
  id: string;
  propertyId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userAvatar?: string;
}
