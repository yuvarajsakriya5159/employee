import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
