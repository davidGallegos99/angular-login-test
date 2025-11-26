import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () =>
      import('./modules/auth/presentation/auth.component').then(
        (m) => m.AuthComponent
      ),
    loadChildren: () =>
      import('./modules/auth/presentation/auth.routes').then(
        (m) => m.AuthRoutes
      ),
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'login' },
];
