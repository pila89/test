export interface Product {
  id?: number;
  title?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  description?: string;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: Array<string>;
}
export interface ProductResponse {
  products?: Array<Product>;
  total?: number;
  skip?: number;
  limit?: number;
}
