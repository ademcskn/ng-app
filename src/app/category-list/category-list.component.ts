import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category | null;
  categoriesRepository: CategoryRepository;
  constructor() {
    this.categoriesRepository = new CategoryRepository();
    this.categories = this.categoriesRepository.getCategories();
  }
  ngOnInit(): void {}

  selectCategory(category: Category) {
    if (this.selectedCategory) {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
    }
  }
}
