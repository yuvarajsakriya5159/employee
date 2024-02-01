import { MainServiceService } from './../main-service.service';
import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve <any> {
 
 constructor(private mainServiceService:MainServiceService){}
  resolve(){
               return this.mainServiceService.BranchData                     
  }
}
