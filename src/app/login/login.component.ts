import { Component, Input, OnInit } from '@angular/core';
//import { SideBarMenuComponent } from '../side-bar-menu/side-bar-menu.component'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public x_sts_user: string;
  public x_sts_userrole: string;
  password: string;
  hide = true;
  isUserLoggedIn: boolean;
  // isNewUser: boolean = false; //changes to true when nuid is not in db (loggedIn())
  
  // T12345 x_sts_userrole=‘admin’, 
  // T99999 x_sts_userrole=‘dba’ 
  // T11111 _sts_userrole=‘user’ 
  // else   x_sts_userrole=‘newUser’
 
  loggedIn() {
    // this.isUserLoggedIn = this.sideBarMenuComponent.getIsUserLoggedIn();
    // this.isUserLoggedIn = true;
    // console.log("isUserLoggedIn " + this.isUserLoggedIn);

    // if (this.x_sts_user.toUpperCase() === "T12345") {
    //   this.x_sts_userrole = "admin";
    //   this.router.navigate(['./admin-dashboard']);
    // } 
    // else if(this.x_sts_user.toUpperCase() === "T99999") {
    //   this.x_sts_userrole = "dba";
    // }
    // else if(this.x_sts_user.toUpperCase() === "T11111") { //if user is reg user
    //   this.x_sts_userrole="user";
    //   this.router.navigate(['./dashboard']);
    // }
    // else {
    //   this.x_sts_userrole = "newUser";
    //   // this.isNewUser = true;
    //   this.router.navigate(['./on-board-user']);
    // }

    // console.log("x_sts_user " + this.x_sts_user);
    // console.log("x_sts_userrole " + this.x_sts_userrole);
    this.auth.login()
    //this.auth.handleAuthentication();
  }

  loggedOut() {
    this.isUserLoggedIn = false;
    this.x_sts_user = "";
    this.x_sts_userrole = "";
  }

  // constructor(private sideBarMenuComponent: SideBarMenuComponent) { }
  constructor (private router: Router,
               private auth: AuthService) { }

  ngOnInit() {
  }

}