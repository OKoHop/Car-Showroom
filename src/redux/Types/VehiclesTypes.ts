export type Products = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  warrantyInformayion: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  images: string[];
  thumbnail: string;
};

export type Vehicles = {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
};

export type VehiclesState = {
  vehicles: Vehicles;
  isLoading: boolean;
  error: string;
};

export type State = {
  vehicles: VehiclesState;
};

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
