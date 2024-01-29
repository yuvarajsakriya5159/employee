import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { MainServiceService } from "./main-service.service";
 
export const CanDeActivate = ()=>{
 
    const ls  = inject(MainServiceService)
    const rt = inject(Router);
 
    if(localStorage.getItem("token") ==='"AuthKey"'){
        rt.navigate([''])
        return false;
    }
    else{
       
        return true;
    }
}