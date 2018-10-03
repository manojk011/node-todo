import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
// import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IaasComponent } from '../iaas/iaas.component';
import { ItemComponent } from '../iaas/tshirt/item.component';
import { CreateVmComponent } from '../iaas/create-vm/create-vm.component';
import { DbaasComponent } from '../dbaas/dbaas.component';
import { LbaasComponent } from '../lbaas/lbaas.component';
import { AdminDashboardComponent, AddGroupDialog, AddOrgDialog } from '../admin-dashboard/admin-dashboard.component';

import { OrgSetupComponent } from '../org-setup/org-setup.component';
// import { OnBoardUserComponent } from '../on-board-user/on-board-user.component';
import { NewOrgComponent } from '../new-org/new-org.component'

import { MaterialModule } from '../app.module';

// import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSidenavModule} from '@angular/material';
// import { MatTableModule } from '@angular/material/table';
// import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import {CdkTableModule} from '@angular/cdk/table';


@NgModule({
  exports: [
    // LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MaterialModule,
    // ReactiveFormsModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatTableModule,
    // MatSidenavModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatCheckboxModule,
    // CdkTableModule,
    //MatTableDataSource,
    FormsModule,
    // BrowserModule,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [
    // LoginComponent,
    DashboardComponent,
    IaasComponent,
    DbaasComponent,
    LbaasComponent,
    ItemComponent,
    CreateVmComponent,
    AdminDashboardComponent,
    OrgSetupComponent,
    // OnBoardUserComponent,
    NewOrgComponent,
    AddGroupDialog,
    AddOrgDialog
  ],
  providers: [],
  entryComponents: [AdminDashboardComponent, AddGroupDialog, AddOrgDialog],
})

export class AdminLayoutModule {}
