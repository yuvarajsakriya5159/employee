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
  CompanyData:any=this.mainServiceService.CompanyData;

  DeleteCmp(deleteme:number){
    this.CompanyData.splice(deleteme,1)
    }

}
