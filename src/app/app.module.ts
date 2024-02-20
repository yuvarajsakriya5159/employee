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
import { ResolveGuard } from './permission_gard/resolve.guard';
import {HttpClientModule} from '@angular/common/http';
// import { FavouriteComponent } from './Favourite/favourite/favourite.component';
import { FavoriteComponent } from './Favorite/favorite/favorite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


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
    // FavouriteComponent,
    FavoriteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  providers: [ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
