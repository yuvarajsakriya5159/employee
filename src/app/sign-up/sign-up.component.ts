import { Router } from '@angular/router';
import { MainServiceService } from './../main-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private mainServiceService: MainServiceService, private router: Router) { }

  username: string = "";
  password: string = ""
  RepeatPassword: string = ""
  CheckData: boolean = true

  CurrentSignUpDetails: any = {
    username: "",
    password: "",
    RepeatPassword: ""
  }

  AddSignUpData() {
    if(this.username === '' && this.password === '')
    {
      alert('fill informations first');
      return;
    }
    this.CurrentSignUpDetails.username = this.username;
    this.CurrentSignUpDetails.password = this.password;
    this.CurrentSignUpDetails.RepeatPassword = this.RepeatPassword;

    let temp : any;

    this.mainServiceService.userdata.find((item: any) => {
      if (item.username === this.CurrentSignUpDetails.username) {
        this.CheckData = false;
        // return alert("UserName already exist")
      }
    })

    if ((this.CurrentSignUpDetails.password === this.CurrentSignUpDetails.RepeatPassword) && this.CheckData) {
      this.mainServiceService.userdata.push(this.CurrentSignUpDetails)
      console.log('inside if')
      console.log(this.mainServiceService.userdata)
      this.router.navigate(['/'])
    }

   
    
    else {
      return alert("UserName already exist Or your password does not match")
    }
  }

  returnToLogin(){
    localStorage.removeItem('datas');
    localStorage.removeItem('token')

    this.router.navigate(['/']);
}
}
