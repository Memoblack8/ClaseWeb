import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component'; 
import { GuestComponent } from './pages/guest/guest.component';
import { DummyComponent } from './pages/dummy/dummy.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { PasswordComponent } from './pages/password/password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'guest', component: GuestComponent },
  { path: 'dummy', component: DummyComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'password', component: PasswordComponent}
];