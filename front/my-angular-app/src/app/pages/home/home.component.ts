import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuthenticated: boolean = true; 

  constructor(private router: Router) {}

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']); 
  }
}
