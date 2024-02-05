import { Observable, map } from 'rxjs';
import { MainServiceService } from './../main-service.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private mainServiceService:MainServiceService){ }
  myObservable=new Observable((observer)=>{
      console.log("observeble start");
      setTimeout(()=>{observer.next("1") },1000)
      setTimeout(()=>{observer.next("11") },2000)
      setTimeout(()=>{observer.next("111")  },3000)
      setTimeout(()=>{observer.next("1111")  },4000)
      })
api:any;

transform=this.mainServiceService.userdataObserveble.pipe(map((val)=>{  //map operator
  if(val.username=="yuvraj@123")
  {
    val.password=="121212"
    return val
  }return val
}))
  ngOnInit(): void {
   this.transform.subscribe((data)=>{  //subscribe the data                                          
    console.log(data)
   })

}
}
