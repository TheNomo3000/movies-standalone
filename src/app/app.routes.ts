import { Routes } from '@angular/router';
import { CheckCertificationGuard } from './application/guards/check-certification.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./presentation/movies/movies.component').then(
        (m) => m.MoviesComponent
      ),
    canActivate: [CheckCertificationGuard],
  },

  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./presentation/movies-detail/movies-detail.component').then(
        (m) => m.MoviesDetailComponent
      ),
    canActivate: [CheckCertificationGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export default routes;
