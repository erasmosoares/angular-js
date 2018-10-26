import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any;

  constructor(private route: ActivatedRoute, 
              private service: GithubService) { }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{

    });
    this.route.queryParamMap.subscribe(params=>{
      
    });

    this.service.getAll()
    .subscribe(followers=> this.followers = followers);
  } 
}  