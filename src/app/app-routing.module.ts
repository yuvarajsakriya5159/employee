import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CanActivate } from './authGuard.guard';
import { PermissionGardGuard } from './permission_gard/permission-gard.guard';
// import { CanDeActivate } from './Restriction.guard';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:UserLoginComponent
},//,canActivate:[CanDeActivate]
  {path:"SignUp",component:SignUpComponent},
  {path:"Dashboard",component:DashboardComponent,canActivate:[CanActivate],
  children:[
    {path:"Home",component:HomeComponent},
    {path:"Employee",component:EmployeeComponent,canActivate:[PermissionGardGuard],data:{permission:['SuperAdmin','Admin','user']}},
    {path:"Branch",component:BranchComponent,canActivate:[PermissionGardGuard],data:{permission:['SuperAdmin','Admin']}},
    {path:"Company",component:CompanyComponent,canActivate:[PermissionGardGuard],data:{permission:['SuperAdmin']}}
  ]}
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
