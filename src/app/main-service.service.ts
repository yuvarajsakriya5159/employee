import { Injectable } from '@angular/core';
import { loginUserDetailsTypes } from './types';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  currentLoginDetails: loginUserDetailsTypes = { userName: "", userPass: "" };
  currentUserRole : string = "";
  areEquel = false;
   authPermission:boolean=false;
  constructor() { }
  userdata: any = [
    {
      username: "yuvraj@123",
      password: "1234",
      role: "SuperAdmin"
    },
    {
      username: "ujjwal@123",
      password: "12345",
      role: "Admin"
    },
    {
      username: "harsh@123",
      password: "12346",
      role: "user"
    },
    {
      username: "hiren@123",
      password: "1234567",
      role: "user"
    }
  ];

  CompanyData: any = [
    {
      comname: "BTL",
      location: "Ahemdabad"
      
    },
    {
      comname: "BRAIN PAYROLL",
      location: "Gota"
    },
    {
      comname: "TATA",
      location: "Mumbai"
    },
    {
      comname: "RELINCE",
      location: "Jamnagar"
    }
  ];

  BranchData: any = [
    {
      branchname: "Devloper",
      TotalMember: "15"
      
    },
    {
      branchname: "QA",
      TotalMember: "3"
      
    },
    {
      branchname: "Account",
      TotalMember: "5"
      
    },
    {
      branchname: "BA",
      TotalMember: "4"
      
    },
  ];


  LoginData() {

     this.authPermission=true;
    this.userdata.find((data: any) => {
      // console.log(data);
      // console.log(this.currentLoginDetails);

      if (data.username === this.currentLoginDetails.userName && data.password === this.currentLoginDetails.userPass) {
        this.currentUserRole = data.role;
        this.areEquel = true;
      }
    })
  }
  
}
