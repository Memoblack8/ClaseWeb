import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {  
  people: any[] = [];

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPeople().subscribe({
      next: (response) => {
        this.people = response.results;
      },
      error: (error) => {
        console.error('Error al obtener personajes:', error);
        alert('Hubo un problema al obtener los datos');
      }
    });
  }
  
  logout(): void {
    this.authService.logout(); 
  }
}
