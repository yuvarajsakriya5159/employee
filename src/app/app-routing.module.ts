import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"",component:UserLoginComponent},
  {path:"Dashboard",component:DashboardComponent,canActivate:[AuthGuard], children:[
    {path:"Home",component:HomeComponent},
    {path:"Employee",component:EmployeeComponent},
    {path:"Branch",component:BranchComponent},
    {path:"Company",component:CompanyComponent}
  ]},
  {path:"SignUp",component:SignUpComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
