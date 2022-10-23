import { Observable } from 'rxjs';
import { GetMoviesRequest } from '../models/get-movies-request.model';
import { MovieModel } from '../models/movie.model';
import { PaginationModel } from '../models/pagination.model';
import { CertificationListModel } from '../models/certification-list.model';
import { MovieDetailModel } from '../models/movie-detail.model';
import { GetMovieDetailRequest } from '../models/get-movie-detail-request.model';

export abstract class MovieRepository {
  constructor() {}
  abstract getTopRatedMovies(
    params: GetMoviesRequest
  ): Observable<PaginationModel<MovieModel[]>>;
  abstract getCertifications(): Observable<CertificationListModel>;
  abstract getMovieDetail(
    params: GetMovieDetailRequest
  ): Observable<MovieDetailModel>;
}
