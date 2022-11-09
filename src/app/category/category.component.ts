import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  categoriesRepository: CategoryRepository;
  constructor() {
    this.categoriesRepository = new CategoryRepository();
    this.categories = this.categoriesRepository.getCategories();
  }
  ngOnInit(): void {}
}
