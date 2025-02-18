import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // 🔹 Import RouterModule
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(FormsModule), // 🔹 Import FormsModule
    importProvidersFrom(RouterModule), // 🔹 Import RouterModule for router-outlet
    provideHttpClient() // 🔹 Equivalent to HttpClientModule
  ]
};
