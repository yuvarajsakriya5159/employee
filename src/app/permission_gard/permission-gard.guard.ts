 import { PermissionDirective } from './../Directive/permission.directive';
import { MainServiceService } from './../main-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGardGuard implements CanActivate {

  roleof:any;
  premissiondata:string[]=[];
  gouardrole:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
    // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      this.premissiondata=route.data['permission'] 
      // console.log(route.data['permission']) //store the route permission roles
      //this.gouardrole=this.mainServiceService.currentUserRole;
      this.gouardrole=sessionStorage.getItem('role');
      
     if(this.gouardrole){this. roleof=JSON.parse(this.gouardrole)}

     if(this.premissiondata.includes(this.roleof))
     {
      
      return true
      }
      else{  
        return false
        }
      
      
      
   
  }
  constructor(private mainServiceService:MainServiceService,private router:ActivatedRoute){}
  
}
