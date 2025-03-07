import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NgIf, NgFor] 
})
export class HomeComponent implements OnInit {
  people: any[] = [];
  planets: any[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getPeople().subscribe({
      next: (data: any) => {
        this.people = data.results;
      },
      error: (err) => {
        console.error('Error al obtener personas:', err);
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
