import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { Observable } from 'rxjs';
import { MovieRepository } from '../repositories/movie.repository';
import { GetMovieDetailRequest } from '../models/get-movie-detail-request.model';
import { MovieDetailModel } from '../models/movie-detail.model';

@Injectable({
  providedIn: 'root',
})
export class GetMovieDetail
  implements UseCase<GetMovieDetailRequest, MovieDetailModel>
{
  constructor(private repository: MovieRepository) {}
  execute(params: GetMovieDetailRequest): Observable<MovieDetailModel> {
    return this.repository.getMovieDetail(params);
  }
}
