import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Subject,
  switchMap,
  map,
  filter,
  Observable,
  takeUntil,
  delay,
  distinct,
} from 'rxjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CertificationModel } from 'src/app/domain/models/certification.model';
import { LANGUAGE } from 'src/app/domain/models/language.model';
import { MovieModel } from 'src/app/domain/models/movie.model';
import { PaginationModel } from 'src/app/domain/models/pagination.model';
import { UserType } from 'src/app/domain/models/user-type.model';
import { GetCertifications } from 'src/app/domain/use-case/get-certifications.usecase';
import { GetTopRatedMovies } from 'src/app/domain/use-case/get-top-rated-movies.usecase';
import { HeaderComponent } from '../shared/components/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, HeaderComponent, InfiniteScrollModule, RouterModule],
  providers: [GetCertifications, GetTopRatedMovies],
  template: `
    <app-header></app-header>
    <section class="card-container" infiniteScroll (scrolled)="onScrollDown()">
      <div
        class="box"
        *ngFor="let movie of movies"
        [routerLink]="['/movies', movie.id]"
      >
        <figure class="image is-4by5">
          <img [src]="movie.poster" [alt]="movie.title" />
          <div class="average-container">
            {{ movie.voteAverage }}
          </div>
        </figure>
        <div class="content px-2">
          <div class="content-text">
            <p class="title is-6">{{ movie.title }}</p>
            <p class="subtitle is-7 pt-2">
              {{ movie.releaseDate | date: 'dd MMM YYYY' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <progress class="progress mb-4 is-dark" max="100"></progress>
    </div>
  `,
  styles: [
    `
      .card-container {
        display: grid;
        padding: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(182px, 1fr));
        grid-gap: 1rem;
        justify-items: center;
      }
      .box {
        display: grid;
        cursor: pointer;
        height: 100%;
        max-height: 372px;
        max-width: 183px;
        padding: 0;
        width: 100%;
        box-shadow: 0px 1px 5px #555;
        background-color: white;
        .image {
          max-height: 240px;
          position: relative;
          img {
            border-radius: 6px 6px 0 0;
          }
        }
      }
      .content-text {
        padding-top: 35px;
      }
      .average-container {
        background-color: #000000c4;
        width: 50px;
        height: 50px;
        padding: 2px;
        bottom: -25px;
        left: 15px;
        position: absolute;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        font-weight: bold;
      }
    `,
  ],
})
export class MoviesComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();
  movies: MovieModel[] = [];
  nextPage: number = 1;
  userType: UserType;
  isLoading: boolean = true;

  constructor(
    private getTopRatedMovies: GetTopRatedMovies,
    private getCertifications: GetCertifications
  ) {
    this.userType = Number(localStorage.getItem('userType')) ?? 0;
  }

  ngOnInit(): void {
    // Not necesary, but you can use in selector and you can filter movies for certification;
    this.loadCertifications();
    this.loadMovies();
  }

  loadMovies(): void {
    this.getMovies(this.nextPage)
      .pipe(
        switchMap((response: PaginationModel<MovieModel[]>) => {
          console.log(response);
          this.setMovieData(response);
          return this.getMovies(this.nextPage);
        })
      )
      .subscribe({
        next: (response: PaginationModel<MovieModel[]>) =>
          this.setMovieData(response),
      });
  }

  loadCertifications(): void {
    this.getCertifications
      .execute()
      .pipe(
        map((m) => m['ES']?.find((f) => f.certification === '16')),
        filter((f) => Boolean(f)),
        map((m) => m as CertificationModel)
      )
      .subscribe({
        next: (certification: CertificationModel) => {
          console.log(certification);
        },
      });
  }

  getMovies(page: number): Observable<PaginationModel<MovieModel[]>> {
    return this.getTopRatedMovies
      .execute({
        language: LANGUAGE.es,
        page,
        certification: {
          country: 'ES',
          type: this.userType === UserType.KID ? '16' : '',
        },
      })
      .pipe(
        takeUntil(this.destroy$),
        distinct((m) => m.page)
      );
  }

  onScrollDown(): void {
    console.log('scrolled down!!');
    this.isLoading = true;
    this.getMovies(this.nextPage)
      .pipe(delay(1500))
      .subscribe({
        next: (response: PaginationModel<MovieModel[]>) =>
          this.setMovieData(response),
      });
  }

  private setMovieData(response: PaginationModel<MovieModel[]>): void {
    this.movies = [...this.movies, ...response.data];
    this.nextPage++;
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
