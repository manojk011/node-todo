import { Component, Input, OnInit } from '@angular/core';

// import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from '../login/login.component';


export interface Links {
  routerURL: string;
  title: string;
}

const links: Links[] = [
  { routerURL: "dashboard", title: "Dashboard" },
  { routerURL: "iaas", title: "Infrastructure as a Service" },
  { routerURL: "dbaas", title: "Database as a Service" },
  { routerURL: "lbaas", title: "Load Balancer as a Service" },
];

const adminLinks: Links[] = [
  { routerURL: "admin-dashboard", title: "Dashboard" },
  { routerURL: "org-set-up" , title: "Org Set Up"},
  { routerURL: "item" , title: "Create TShirt"},
];

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss']
})

export class SideBarMenuComponent implements OnInit {

  @Input() public isUserLoggedIn: boolean;
  // @Input() public isNewUser: boolean = this.loginComponent.isNewUser;
  public admin:boolean = false;




  // constructor (private loginComponent: LoginComponent) { }
  constructor (public auth: AuthService ) { }

  ngOnInit() {
  }

  logout(){
   this.auth.logout(); 
  }

}
