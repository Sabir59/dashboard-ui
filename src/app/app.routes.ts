import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DetailsComponent } from './components/reports/details/details.component';
// import { AllReportsComponent } from './components/reports/all-reports/all-reports.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // { path: '', redirectTo: 'reports', pathMatch: 'full' }, // Default child route
      {
        path: 'reports',
        component: ReportsComponent,
        children: [
          // { path: '', redirectTo: 'daily', pathMatch: 'full' }, // Default child route
          // { path: 'daily', component: DailyComponent },
          // { path: 'reports', component: AllReportsComponent },
          // Add other report-related routes here
        ],
      },
    ],
  },
  { path: 'dashboard/reports/:id', component: DetailsComponent },
];
