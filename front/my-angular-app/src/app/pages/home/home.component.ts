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
  currentPage: number = 1;  
  totalPages: number = 7;  
  limit: number = 5;      
  totalRecords: number = 31;

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchPeople(); 
  }

  fetchPeople(): void {
    console.log(`Pidiendo página ${this.currentPage} con límite ${this.limit}`);
    
    this.apiService.getPeople(this.currentPage, this.limit).subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        
        if (data && !isNaN(data.total_records)) {
          this.totalRecords = data.total_records;
        } else {
          this.totalRecords = 1; 
        }
  
        this.people = data.results;
        
        this.totalPages = Math.ceil(6);
        console.log('Total de páginas:', this.totalPages);  
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
