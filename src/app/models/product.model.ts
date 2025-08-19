export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand?: string;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  images?: string[];
}

export interface IProductListResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
