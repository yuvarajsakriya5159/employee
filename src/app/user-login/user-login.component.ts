import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { loginUserDetailsTypes } from '../types';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private router: Router, private mainservice: MainServiceService) {

  }

  userName: string = "";
  userPass: string = "";

  currentUserDetails: loginUserDetailsTypes = { userName: "", userPass: "" };



  Userlogin: any = [];
  

  ngOnInit() {

  }
  login() {

    this.currentUserDetails.userName = this.userName;
    this.currentUserDetails.userPass = this.userPass;
   
    const keyVal="AuthKey"
    localStorage.setItem('datas', JSON.stringify(this.mainservice.userdata)); 
    
    localStorage.setItem('token', JSON.stringify(keyVal));
    
    this.mainservice.currentLoginDetails = this.currentUserDetails;
    this.mainservice.LoginData();

    
    

    if (this.mainservice.areEquel) {
      console.log(this.mainservice.areEquel);
      this.router.navigate(['Dashboard']);
    }
    else {
      alert("please Enter Valid Information");
    }

}
SignUp(){
  this.router.navigate(['SignUp'])  
}



}
