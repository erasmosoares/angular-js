import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  
  pageTitle;
  authorsList;
  isActive = true;
  email = "me@example.com";

  imageUrl = "https://cdn-images-1.medium.com/max/1600/1*VnJ1MGwCkkQ5umi895C6Fg.gif";

  constructor(service: AuthorsService) {
    this.authorsList = service.getAuthors();
    this.pageTitle = service.getNumberOfAuthors() + "Authors";
   }

  ngOnInit() {
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked",$event);
  }

  onKeyUp(){
    console.log(this.email);
  }
}