import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  
  listOfAuthors: string[] = ["author1","author2","author3"];
  
  constructor() { }

  getAuthors(){
    return this.listOfAuthors;
  }

  getNumberOfAuthors(){
    return this.listOfAuthors.length;
  }
}
