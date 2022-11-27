import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  constructor(private authServise: AuthService) {}

  ngOnInit(): void {
    this.authServise.user.subscribe((user) => {
      this.isAuthenticated = !!user; //iki ! anlamı null değer geliyorsa false, false ise true yap.
      this.isAdmin = user?.email == 'ademcskn@hotmail.com';
    });
  }

  logout() {
    this.authServise.logout();
  }
}
