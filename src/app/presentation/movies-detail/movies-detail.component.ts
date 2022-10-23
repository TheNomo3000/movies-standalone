import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { GetMovieDetail } from 'src/app/domain/use-case/get-movie-detail.usecase';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header.component';
import { Observable } from 'rxjs';
import { MovieDetailModel } from 'src/app/domain/models/movie-detail.model';

@Component({
  selector: 'app-movies-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  template: `
    <div
      class="movie-detail-container"
      *ngIf="movie$ | async as movieDetail"
      [style.background-image]="'url(' + movieDetail.background + ')'"
    >
      <div class="header">
        <button class="button" (click)="goToBack()">
          <span class="icon is-small">
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </button>
      </div>

      <div
        class="movie-detail is-flex is-flex-direction-column is-align-items-center"
      >
        <div class="card my-2">
          <div class="card-image">
            <figure class="image is-1by1">
              <img [src]="movieDetail.poster" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="is-flex is-justify-content-space-between">
              <div>
                <span class="title m-0">{{ movieDetail.title }}</span>
                <span class="subtitle is-7 pl-1 pb-1">
                  ({{ movieDetail.duration }} min)</span
                >
              </div>
              <div>
                <div class="average-container">
                  {{ movieDetail.voteAverage | number: '1.2-2' }}
                </div>
              </div>
            </div>
            <h2 class="subtitle is-6">
              {{ movieDetail.releaseDate | date: 'longDate' }}
            </h2>
            <div class="tags">
              <span
                class="tag is-info is-light"
                *ngFor="let gender of movieDetail.genders"
                >{{ gender }}</span
              >
            </div>
            <div class="content">
              {{ movieDetail.overview }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .header {
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 1;
      }
      .movie-detail-container {
        position: relative;
        min-height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .movie-detail-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        z-index: 0;
        background: #00000075;
      }
      .movie-detail {
        height: 100%;
        padding: 1rem;

        .card {
          max-width: 50vh;
          border-radius: 30px;
          .card-image {
            .image {
              img {
                border-radius: 28px 29px 0 0;
              }
            }
          }
        }

        .average-container {
          right: 0;
          top: 0;
          background-color: #000000c4;
          width: 50px;
          height: 50px;
          padding: 2px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          color: white;
          font-weight: bold;
        }
      }
    `,
  ],
})
export class MoviesDetailComponent implements OnInit {
  private movieId: number = this.activatedRoute.snapshot.params['id'];

  movie$: Observable<MovieDetailModel> = this.getMovieDetail.execute({
    id: this.movieId,
  });

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private getMovieDetail: GetMovieDetail
  ) {}

  ngOnInit(): void {}

  goToBack() {
    this.location.back();
  }
}
