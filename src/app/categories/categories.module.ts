import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../authentication/admin.guard';
import { AuthenticationModule } from '../authentication/auth/authentication.module';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: 'categories',
    children: [
      {
        path: 'create',
        component: CategoryCreateComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [CategoryCreateComponent, CategoryListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AuthenticationModule,
    RouterModule.forChild(routes),
  ],
  exports: [CategoryCreateComponent, CategoryListComponent],
})
export class CategoriesModule {}
