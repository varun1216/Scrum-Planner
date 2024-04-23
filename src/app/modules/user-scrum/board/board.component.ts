import { Component } from '@angular/core';
import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  statusCode!:{msg:string,statusCode:number};
  isOpenPopup:boolean=false;
  toastAlive:boolean=false;
  constructor(public storyService: StoryService){

  }
  createStories(){
  this.isOpenPopup=!this.isOpenPopup;
  }
  toggleModalClose(){
    this.isOpenPopup=false;
  }
  getStatusCode(status:any){
    this.toastAlive=true;
    this.statusCode=status
  console.log("Status-->",status);
  setTimeout(() => {
    this.toastAlive=false;
  }, 2000);
  }
}
