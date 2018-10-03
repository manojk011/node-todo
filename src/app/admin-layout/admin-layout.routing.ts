import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IaasComponent } from '../iaas/iaas.component';
import { ItemComponent } from '../iaas/tshirt/item.component';
import { CreateVmComponent } from '../iaas/create-vm/create-vm.component';
import { DbaasComponent } from '../dbaas/dbaas.component';
import { LbaasComponent } from '../lbaas/lbaas.component';
// import { OnBoardUserComponent } from '../on-board-user/on-board-user.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { OrgSetupComponent } from '../org-setup/org-setup.component';
import { NewOrgComponent } from '../new-org/new-org.component'


export const AdminLayoutRoutes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: DashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'iaas', component: IaasComponent },
  { path: 'create-vm', component: CreateVmComponent },
  { path: 'item', component: ItemComponent },
  { path: 'dbaas', component: DbaasComponent },
  { path: 'lbaas', component: LbaasComponent },
  { path: 'org-setup', component: OrgSetupComponent },
  // { path: 'on-board-user', component: OnBoardUserComponent },
  { path: 'new-org', component: NewOrgComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(AdminLayoutRoutes),
    ],
    exports: [
      RouterModule
    ],
  })
export class AppRoutingModule {
}