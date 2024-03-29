import { EventEmitter, Injectable } from '@angular/core';
import { FavoriteDatatypes, loginUserDetailsTypes } from './types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainServiceService {

  currentLoginDetails: loginUserDetailsTypes = { userName: "", userPass: "" };
  currentUserRole : string = "";
  areEquel = false;
  //  authPermission:boolean=false;
  constructor(private http:HttpClient) { }
  
  favoritedata = new BehaviorSubject<FavoriteDatatypes>({ username: "yuvraj@123",
  password: "1234",
  role: "SuperAdmin" })

  receive(data:FavoriteDatatypes){
    this.favoritedata.next(data)
  }
 
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
      
    }
  ];


  LoginData() {
    
    // this.authPermission=true;
      
    this.userdata.find((data: any) => {
      // console.log(data); 
      // console.log(this.currentLoginDetails);

      if (data.username === this.currentLoginDetails.userName && data.password === this.currentLoginDetails.userPass) {  
       
        this.currentUserRole = data.role;
      
        sessionStorage.setItem('role',JSON.stringify(this.currentUserRole))
        
        this.areEquel = true;
       
      }
    })
  }
  userdataObserveble=new Observable<FavoriteDatatypes>((observer)=>{  //create the observable and observe the value of the observable using next(data)
    observer.next(this.userdata);
  })
}

