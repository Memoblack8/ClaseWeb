import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class HomeComponent implements OnInit {  
  people: any = [];
  currentPage: number = 1;  // Página actual
  totalPages: number = 5;  // Total de páginas
  limit: number = 5; 

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(): void {
    this.apiService.getPeople(this.currentPage, this.limit).subscribe({
      next: (data) => {
        this.people = data.results;
        this.totalPages = Math.ceil(data.total_records / this.limit); // Calcula el total de páginas
      },
      error: (error) => {
        console.error('Error al obtener los personajes:', error);
      }
    });
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchPeople();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchPeople();
    }
  }
  
  logout(): void {
    this.authService.logout(); 
  }
}
