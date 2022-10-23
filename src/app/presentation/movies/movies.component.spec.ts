import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieRepository } from '../../domain/repositories/movie.repository';
import { MovieMockRepository } from '../../infrastructure/mocks/movie-mock.repository';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesComponent, RouterTestingModule],
      providers: [{ provide: MovieRepository, useClass: MovieMockRepository }],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load films', () => {
    expect(component.movies.length).toBeGreaterThan(0);
  });
});
