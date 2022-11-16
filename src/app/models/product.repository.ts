import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      category: 1,
      name: 'Samsung s10+',
      price: 3000,
      imageUrl: '1.jpeg',
      description: 'iyi telefon',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Samsung s21+',
      category: 1,
      price: 4000,
      imageUrl: '2.jpeg',
      description: 'Güzel telefon',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Samsung s22+',
      category: 1,
      price: 5000,
      imageUrl: '3.jpeg',
      description: 'Süper telefon',
      isActive: true,
      categoryId: 3,
    },
    {
      id: 4,
      name: 'Samsung s23+',
      category: 1,
      price: 5000,
      imageUrl: '3.jpeg',
      description: 'Süper iyi telefon',
      isActive: true,
      categoryId: 1,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }
  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  getProductsbyCategoryId(id: number): Product[] {
    return this.products.filter((p) => p.categoryId == id);
  }
}
