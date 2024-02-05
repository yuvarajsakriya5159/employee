import { FavoriteDatatypes } from '../types';
import { MainServiceService } from './../main-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  currentUserName: string = "";
  currentUserPassword: string = "";
  flag : boolean = false;
  currentDataObj : any;
  favoriteData:any;

  constructor(private mainServiceService: MainServiceService) {

  }
  Emptempdata: any = localStorage.getItem('datas')
  Empmaindata: any = JSON.parse(this.Emptempdata)

  DeleteEmp(deleteme: number) {
    this.Empmaindata.splice(deleteme, 1)
  }

  Editdata(data: any) {
    this.currentUserName = data.username;
    this.currentUserPassword = data.password;
    this.currentDataObj = data;
console.log()
     this.flag = true;
  }

  onUpdate() {
    this.currentDataObj.username = this.currentUserName;
    this.currentDataObj.password = this.currentUserPassword;

    this.currentUserName = "";
    this.currentUserPassword = "";

     this.flag = false;
  }

  AddFavourite(Favourite:FavoriteDatatypes){

    this.mainServiceService.receive(Favourite)
  //   this.currentUserName = Favourite.username;
  //   this.currentUserPassword = Favourite.password;
  //   this.favoriteData=Favourite;
  //  console.log(this.favoriteData)

 
  }
}

