import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private router: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isAuthenticated()){
      console.log(next.url)
      //session id exists and is not expired
      return true;
    }else{
      //this.myRoute.navigate(["login"]);
      //this.auth.login().unsubscribe;
      
      //return false;
      //this.auth.login();
      this.router.navigate(['./login']);
    }
    
  }
}