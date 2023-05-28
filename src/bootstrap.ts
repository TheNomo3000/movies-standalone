import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import routes from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieRepository } from './app/domain/repositories/movie.repository';
import { TMDBRepository } from './app/infrastructure/the-movie-db/tmdb.repository';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(BrowserAnimationsModule),
    { provide: MovieRepository, useClass: TMDBRepository },
  ],
}).catch((err) => console.error(err));
