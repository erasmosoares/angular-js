import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  isClicked:boolean;
  likes = 0;

  constructor() { }

  onClick(){
    this.isClicked = !this.isClicked;
    this.likes = this.isClicked ? 1 : 0;
  }

}
