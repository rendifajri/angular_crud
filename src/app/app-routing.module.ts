import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CondensedComponent } from './@pages/layouts/condensed/condensed.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: CondensedComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//useHash:false
  exports: [RouterModule]
})
export class AppRoutingModule { }
