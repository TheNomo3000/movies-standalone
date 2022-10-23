import { Mapper } from '../../../domain/base/mapper';
import { CertificationListModel } from 'src/app/domain/models/certification-list.model';
import { TMDBCertificationListEntity } from '../entities/tmdb-cert-entity';

export class TMDBCertificationMapper
  implements Mapper<TMDBCertificationListEntity, CertificationListModel>
{
  mapFrom(param: TMDBCertificationListEntity): CertificationListModel {
    return param.certifications;
  }

  mapTo(param: CertificationListModel): TMDBCertificationListEntity {
    return {
      certifications: {},
    };
  }
}
