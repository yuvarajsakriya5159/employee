import { map } from 'rxjs';
import { MainServiceService} from './../../main-service.service';
import { Component,OnInit } from '@angular/core';
import { FavoriteDatatypes } from 'src/app/types';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  constructor(private mainServiceService:MainServiceService){}

  DisplayData:FavoriteDatatypes[]=[];

  ngOnInit(){
  
    this.mainServiceService.favoritedata.pipe(map(n=>{if(n.password=="1234"){
      n.username=	"ujjwal@123"
      return n;
    }
    return n;
  }
    ))
    
    
    .subscribe((item :FavoriteDatatypes)=>{
      this.DisplayData.push(item);
    })
  console.log(this.DisplayData)
  }
}
