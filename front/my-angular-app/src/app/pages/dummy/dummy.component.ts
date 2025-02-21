import { Component } from '@angular/core';
import { Router } from '@angular/router';  // ✅ Importar Router

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'] // ✅ styleUrls en plural
})
export class DummyComponent {
  constructor(private router: Router) {} // ✅ Inyectar Router en el constructor

  Back() {
    this.router.navigate(['/guest']); // ✅ Función de navegación corregida
  }
}
