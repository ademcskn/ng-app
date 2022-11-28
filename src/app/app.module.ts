import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthenticationModule } from './authentication/auth/authentication.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    CategoriesModule,
    AuthenticationModule,
    SharedModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
