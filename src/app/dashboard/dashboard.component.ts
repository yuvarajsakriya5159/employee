import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
 
})
export class DashboardComponent {
constructor(private route:Router){}
  Logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("datas");
     this.route.navigate([''])
  }
}
