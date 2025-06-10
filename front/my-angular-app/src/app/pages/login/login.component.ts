import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.usuario, this.contrasena)) {
      this.router.navigate(['/home']); 
    } else {
        
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onForgot(){
    this.router.navigate(['/password']);
  }

  Back() {
    this.router.navigate(['/guest']); 
  }
}
