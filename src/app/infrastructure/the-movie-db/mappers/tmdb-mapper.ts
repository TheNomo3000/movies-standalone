import { Mapper } from '../../../domain/base/mapper';
import { MovieModel } from '../../../domain/models/movie.model';
import { PaginationModel } from 'src/app/domain/models/pagination.model';
import { TMDBEntity, TMDBPageEntity } from '../entities/tmdb-entity';

export class TMDBPageRepositoryMapper
  implements Mapper<TMDBPageEntity, PaginationModel<MovieModel[]>>
{
  mapFrom(param: TMDBPageEntity): PaginationModel<MovieModel[]> {
    const movieMapper: TMDBRepositoryMapper = new TMDBRepositoryMapper();

    return {
      page: param.page,
      data: param.results.map(movieMapper.mapFrom),
      totalPages: param.total_pages,
      totalResults: param.total_results,
    };
  }

  mapTo(param: PaginationModel<MovieModel[]>): TMDBPageEntity {
    const movieMapper: TMDBRepositoryMapper = new TMDBRepositoryMapper();

    return {
      page: param.page,
      total_pages: param.totalPages,
      total_results: param.totalResults,
      results: param.data.map(movieMapper.mapTo),
    };
  }
}

export class TMDBRepositoryMapper implements Mapper<TMDBEntity, MovieModel> {
  mapFrom(param: TMDBEntity): MovieModel {
    return {
      id: param.id,
      poster:
        'https://www.themoviedb.org/t/p/w440_and_h660_face' + param.poster_path,
      title: param.title,
      description: param.overview,
      releaseDate: param.release_date,
      voteAverage: param.vote_average,
    };
  }

  mapTo(param: MovieModel): TMDBEntity {
    return {
      poster_path: param.poster,
      adult: false,
      overview: param.description,
      release_date: param.releaseDate,
      id: 0,
      original_title: '',
      original_language: '',
      title: param.title,
      backdrop_path: '',
      popularity: 0,
      vote_count: 0,
      video: false,
      vote_average: param.voteAverage,
    };
  }
}
