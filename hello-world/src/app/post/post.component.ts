import { NotFoundError } from './../common/not-found';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  
  posts: any[];

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(
      response => {
      this.posts = response.json();
    },
      error => {
      alert('An unexpected error occured.');
    });
  }

  //https://jsonplaceholder.typicode.com/posts
  constructor(private service: PostService) {  }

   createPost(input: HTMLInputElement){
    let  post = {title: input.value};
    input.value = '';
    this.service.createPost(post)
    .subscribe(
      response =>{
        post['id'] = response.json().id;
        this.posts.splice(0,0,post); //put first position
    },
      (error: AppError) => {
        if(error instanceof BadInput)
          alert('Bad input.');
        else  
          alert('An unexpected error occured.');
    });
   }

   updatePost(post){
     //update only some properties
     this.service.updatePost(post)
     .subscribe(
       response =>{
       console.log(response.json())
     },
        error => {
      alert('An unexpected error occured.');
    });
     //this.http.put(this.url,JSON.stringify(post));
   }

   deletePost(post){
     this.service.deletePost(post.id)
     .subscribe(() =>{
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1)
     },
      (error: AppError) => {
      if(error instanceof NotFoundError)
        alert('This post has already been deleted')  
      else  
        alert('An unexpected error occured.');
    });
   }
}
 