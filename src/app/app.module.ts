import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { MainServiceService } from './main-service.service';
import { PermissionDirective } from './Directive/permission.directive';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
 

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashboardComponent,
    BranchComponent,
    CompanyComponent,
    EmployeeComponent,
    HomeComponent,
    PermissionDirective,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
