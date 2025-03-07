import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest',
  imports: [CommonModule, FormsModule], 
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'] 
})
export class GuestComponent {
  constructor(private router: Router) {} 

  Login() {
    this.router.navigate(['/login']); 
  }

  Dummy() {
    this.router.navigate(['/dummy']); 
  }
}
