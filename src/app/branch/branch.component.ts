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
  BranchMainData:any=this.mainServiceService.BranchData;

  DeleteBranch(deleteme:number){
    this.BranchMainData.splice(deleteme,1)
    }

    onEdit(item:any){
      item.isEdit=true;
    }
}
