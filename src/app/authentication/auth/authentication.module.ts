import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [{ path: 'auth', component: AuthComponent }],
  },
];
@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [AuthComponent],
})
export class AuthenticationModule {}
