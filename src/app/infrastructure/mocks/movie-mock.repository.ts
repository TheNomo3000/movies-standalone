import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CertificationListModel } from 'src/app/domain/models/certification-list.model';
import { GetMoviesRequest } from 'src/app/domain/models/get-movies-request.model';
import { MovieDetailModel } from 'src/app/domain/models/movie-detail.model';
import { MovieModel } from 'src/app/domain/models/movie.model';
import { PaginationModel } from 'src/app/domain/models/pagination.model';
import { MovieRepository } from 'src/app/domain/repositories/movie.repository';
import { CERTIFICATIONS } from './data/certification';
import { MOVIES_RESPONSE } from './data/movies';

@Injectable({ providedIn: 'root' })
export class MovieMockRepository extends MovieRepository {
  getTopRatedMovies(
    params: GetMoviesRequest
  ): Observable<PaginationModel<MovieModel[]>> {
    return of(MOVIES_RESPONSE);
  }

  getCertifications(): Observable<CertificationListModel> {
    return of(CERTIFICATIONS);
  }

  getMovieDetail(): Observable<MovieDetailModel> {
    throw new Error('Method not implemented.');
  }
}
