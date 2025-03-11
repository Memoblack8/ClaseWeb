import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component'; 

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
