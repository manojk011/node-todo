import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import { Observable } from 'rxjs';

// Add Material Design and Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout'
// import { MatSidenavModule, MatListModule, 
//   MatCardModule, MatRippleModule, MatInputModule,
//   MatFormFieldModule, MatButtonModule, MatCheckboxModule, 
//   MatTabsModule, MatIconModule, MatGridListModule, 
//   MatDialogModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
// import { AppRoutingModule } from './/app-routing.module';
import { AppRoutingModule } from './app.routing';

import { OnBoardUserComponent } from './on-board-user/on-board-user.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './callback/callback.component';

//import { AddGroupDialog } from './admin-dashboard/admin-dashboard.component';
import { ItemService } from './iaas/tshirt/item.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SideBarMenuComponent,
    
    AdminLayoutComponent,
    OnBoardUserComponent,
    CallbackComponent,
    // DbaasComponent,
    // LbaasComponent,
  ],
  exports: [
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    // MatRippleModule,
    FlexLayoutModule,
    MaterialModule,
    // MatInputModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatSidenavModule,
    // MatTabsModule,
    // MatIconModule,
    // MatGridListModule,
    // MatCardModule,
    // MatDialogModule, 
    // MatMenuModule,
    // MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],

  providers: [AuthGuard, AuthService],//, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  // entryComponents: [DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
