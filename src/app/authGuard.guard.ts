import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { MainServiceService } from "./main-service.service";
 
export const CanActivate = ()=>{
 
    const ls  = inject(MainServiceService)
    const rt = inject(Router);
 
    if(localStorage.getItem("token") ==='"AuthKey"'){
       
        return true;
    }
    else{
        rt.navigate([''])
        return false;
    }
}