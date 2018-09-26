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

  constructor(service: AuthorsService) {
    this.authorsList = service.getAuthors();
    this.pageTitle = service.getNumberOfAuthors() + "Authors";
   }

  ngOnInit() {
  }
}