import { MainServiceService } from './../main-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {

  constructor(private mainServiceService:MainServiceService){

  }

  currentBranchName: string = "";
  currentTotalMember: string = "";
  flag : boolean = false;
  currentDataObj : any;

  BranchMainData:any=this.mainServiceService.BranchData;

  DeleteBranch(deleteme:number){
    this.BranchMainData.splice(deleteme,1)
    }

   Editdata(data: any) {
    this.currentBranchName = data.branchname;
    this.currentTotalMember = data.TotalMember;
    this.currentDataObj = data;

    this.flag = true;
  }

  onHide() {
    this.currentDataObj.branchname = this.currentBranchName;
    this.currentDataObj.TotalMember = this.currentTotalMember;

    this.currentBranchName = "";
    this.currentTotalMember = "";

    this.flag = false;
  }
}

