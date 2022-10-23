import { Mapper } from 'src/app/domain/base/mapper';
import { MovieDetailModel } from 'src/app/domain/models/movie-detail.model';
import { TMDBMovieDetailEntity } from '../entities/tmdb-movie-detail-entity';

export class TMDBMovieDetailMapper
  implements Mapper<TMDBMovieDetailEntity, MovieDetailModel>
{
  mapFrom(param: TMDBMovieDetailEntity): MovieDetailModel {
    return {
      id: param.id,
      title: param.title,
      overview: param.overview,
      poster:
        'https://www.themoviedb.org/t/p/w440_and_h660_face' + param.poster_path,
      background:
        'https://www.themoviedb.org/t/p/w440_and_h660_face' +
        param.backdrop_path,
      releaseDate: param.release_date,
      voteAverage: param.vote_average,
      voteCount: param.vote_count,
      duration: param.runtime,
      genders: param.genres.map((genre) => genre.name),
    };
  }
  mapTo(param: MovieDetailModel): TMDBMovieDetailEntity {
    throw new Error('Method not implemented.');
  }
}
