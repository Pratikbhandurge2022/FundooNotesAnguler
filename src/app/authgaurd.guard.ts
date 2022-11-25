import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthgaurdService } from './Services/Authgaurdservice/authgaurd.service';
import { LoginComponent } from './Components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
  constructor(private auth: AuthgaurdService, private router:Router){

  }
  canActivate()
    {

    if(this.auth.IsLoggedIn()){
    return true;
    }
    this.router.navigate(['login']);
    return false;
    }
  
}