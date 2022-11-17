export interface Product {
  id: any;
  name: string;
  category: number;
  price: number;
  imageUrl: string;
  description: string;
  isActive: boolean;
  categoryId?: number;
}
