import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './app/footer/footer.component';
import { HttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    HttpClientModule,
    provideAnimations(),
    ReactiveFormsModule,
    { provide: FooterComponent, useValue: FooterComponent },
    HttpClient
  ]
};
