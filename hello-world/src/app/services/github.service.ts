import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DataService {

  constructor(http: HttpClient) { 
    super('https://api.github.com/users/erasmosoares/followers',http);
  }
}
 