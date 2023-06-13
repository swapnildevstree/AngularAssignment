import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(localStorage.getItem("Auth-cat"));

    if(localStorage.getItem("Auth-cat") !==null){
      return true
    }
    else{
      alert("Please Visit Mice First");
      this.router.navigate(['/Dog']);
      return false;
    }
  }
  
}
