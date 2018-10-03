import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IaasComponent } from './iaas/iaas.component';
import { DbaasComponent } from './dbaas/dbaas.component';
import { LbaasComponent } from './lbaas/lbaas.component';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

 const routes: Routes =[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'iaas', component: IaasComponent },
  { path: 'dbaas', component: DbaasComponent },
  { path: 'lbaas', component: LbaasComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
    {
      path: '',
      loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule'
  }]}
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [
    
  ]
})
export class AppRoutingModule { }
