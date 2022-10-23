import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieRepository } from './domain/repositories/movie.repository';
import { MovieMockRepository } from './infrastructure/mocks/movie-mock.repository';
import { TMDBRepository } from './infrastructure/the-movie-db/tmdb.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: MovieRepository, useClass: TMDBRepository }],
  bootstrap: [AppComponent],
})
export class AppModule {}
