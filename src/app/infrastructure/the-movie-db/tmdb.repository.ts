import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieModel } from 'src/app/domain/models/movie.model';
import { MovieRepository } from 'src/app/domain/repositories/movie.repository';
import { HttpClient } from '@angular/common/http';
import { GetMoviesRequest } from 'src/app/domain/models/get-movies-request.model';
import { PaginationModel } from '../../domain/models/pagination.model';
import { TMDBPageRepositoryMapper } from './mappers/tmdb-mapper';
import { TMDBCertificationMapper } from './mappers/tmdb-cert-mapper';
import { CertificationListModel } from '../../domain/models/certification-list.model';
import { TMDBPageEntity } from './entities/tmdb-entity';
import { MovieDetailModel } from 'src/app/domain/models/movie-detail.model';
import { GetMovieDetailRequest } from 'src/app/domain/models/get-movie-detail-request.model';
import { TMDBCertificationListEntity } from './entities/tmdb-cert-entity';
import { TMDBMovieDetailEntity } from './entities/tmdb-movie-detail-entity';
import { TMDBMovieDetailMapper } from './mappers/tmdb-movie-detail-mapper';

const API_KEY = 'api_key=b194194954a1e2b3515bed02aa0f04c0';
const BASE_URL = `https://api.TMDB.org/3/`;

@Injectable({ providedIn: 'root' })
export class TMDBRepository extends MovieRepository {
  private mapper = new TMDBPageRepositoryMapper();
  private mapperCertification = new TMDBCertificationMapper();
  private mapperMovieDetail = new TMDBMovieDetailMapper();

  constructor(private httpClient: HttpClient) {
    super();
  }

  getTopRatedMovies(
    params: GetMoviesRequest
  ): Observable<PaginationModel<MovieModel[]>> {
    let url =
      BASE_URL +
      `discover/movie?${API_KEY}&language=${params.language}&page=${params.page}`;
    url += `&sort_by=vote_average.desc&vote_count.gte=${
      params.minVotes ?? 300
    }&certification_country=${params.certification.country}&certification.lte=${
      params.certification.type
    }`;

    return this.httpClient
      .get<TMDBPageEntity>(url)
      .pipe(map(this.mapper.mapFrom));
  }

  getCertifications(): Observable<CertificationListModel> {
    const url = BASE_URL + `certification/movie/list?${API_KEY}`;

    return this.httpClient
      .get<TMDBCertificationListEntity>(url)
      .pipe(map(this.mapperCertification.mapFrom));
  }

  getMovieDetail(params: GetMovieDetailRequest): Observable<MovieDetailModel> {
    let url = BASE_URL + `/movie/${params.id}?${API_KEY}&language=es-ES`;
    return this.httpClient
      .get<TMDBMovieDetailEntity>(url)
      .pipe(map(this.mapperMovieDetail.mapFrom));
  }
}
