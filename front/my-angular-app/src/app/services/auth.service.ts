import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = this.getAuthStatus();

  constructor(private router: Router) {}

  private getAuthStatus(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
    return false;
  }

  private setAuthStatus(status: boolean): void {
    this.isAuthenticated = status;
    if (typeof window !== 'undefined' && window.localStorage) {
      if (status) {
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        localStorage.removeItem('isAuthenticated');
      }
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.setAuthStatus(true);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.setAuthStatus(false);
    this.router.navigate(['/login']);
  }
}
