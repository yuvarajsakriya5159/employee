import { MainServiceService } from './../main-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  constructor(private mainServiceService:MainServiceService){

  }

    
  currentcompanyname: string = "";
  currentcompanylocation: string = "";
  flag : boolean = false;
  currentDataObj : any;

  CompanyData:any=this.mainServiceService.CompanyData;

  DeleteCmp(deleteme:number){
    this.CompanyData.splice(deleteme,1)
    }

    Editdata(data: any) {
      this.currentcompanyname = data.comname;
      this.currentcompanylocation = data.location;
      this.currentDataObj = data;
  
      this.flag = true;
    }
  
    onUpdate() {
      this.currentDataObj.comname = this.currentcompanyname;
      this.currentDataObj.location = this.currentcompanylocation;
  
      this.currentcompanyname = "";
      this.currentcompanylocation = "";
  
      this.flag = false;
    }

}
