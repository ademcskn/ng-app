import { Category } from './category';

export class CategoryRepository {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Telefon',
      isActive: true,
    },
    {
      id: 2,
      name: 'Televizyon',
      isActive: true,
    },
    {
      id: 3,
      name: 'Bilgisayar',
      isActive: true,
    },
  ];

  getCategories(): Category[] {
    return this.categories.filter((p) => p.isActive);
  }
  getCategoryById(id: number) {
    return this.categories.find((p) => p.id == id);
  }
}
