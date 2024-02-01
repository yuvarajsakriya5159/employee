 import { PermissionDirective } from './../Directive/permission.directive';
import { MainServiceService } from './../main-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
    // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
     
     console.log(route.data['permission'])
     console.log(this.mainServiceService.currentUserRole)
    
     let premissiondata=route.data['permission']  //store the route permission roles
     let gouardrole=this.mainServiceService.currentUserRole;
   
     if(premissiondata.includes(gouardrole))
     {
      return true
      }
      else{
          alert("you have not access this page");    
        return false
          }
      
      
    return true;
  }
  constructor(private mainServiceService:MainServiceService,private router:ActivatedRoute){
    console.log('this is constructor of permissiongard')
  }
  
}
