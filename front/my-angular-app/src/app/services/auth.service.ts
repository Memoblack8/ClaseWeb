import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private router: Router) {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated = true;
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('isAuthenticated', 'true');
      }
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('isAuthenticated');
    }
    this.router.navigate(['/login']);
  }
}
