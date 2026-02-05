import { Routes } from '@angular/router';
import { Main } from './components/Layout/main/main';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/pages/home/home').then((m) => m.Home),
      },
      {
        path: 'features',
        loadComponent: () => import('./components/pages/features/features').then((m) => m.Features),
      },
      {
        path: 'blog',
        loadComponent: () => import('./components/pages/blog/blog').then((m) => m.Blog),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
