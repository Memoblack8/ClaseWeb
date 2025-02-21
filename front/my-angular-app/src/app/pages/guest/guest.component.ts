import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest',
  standalone: true, // Si el componente es independiente
  imports: [CommonModule, FormsModule], // Agrega los módulos necesarios
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'] // Debe ser 'styleUrls' en plural
})
export class GuestComponent {
  constructor(private router: Router) {} // Inyectamos Router en el constructor

  Login() {
    this.router.navigate(['/login']); 
  }
}
