import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-password',
  imports: [],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {


  constructor(private authService: AuthService, private router: Router) {}
  
  Back() {
    this.router.navigate(['/login']); 
  }

  Send(){
    
  }
}
