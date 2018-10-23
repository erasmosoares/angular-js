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
  
  posts: any;
  ngOnInit(): void {
    this.service.getAll()
    .subscribe(posts=> this.posts = posts);
  }

/* changed to handler error by global error handler
   check common/app-error-handler.ts
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
  */

  //https://jsonplaceholder.typicode.com/posts
  constructor(private service: PostService) {  }

   createPost(input: HTMLInputElement){
    let  post = {title: input.value};
    this.posts.splice(0,0,post); //put first position

    input.value = '';
    this.service.create(post)
    .subscribe(
      response =>{
        post['id'] = response['id'];
    },
      (error: AppError) => {
        this.posts.splice(0,1);
        console.log("asdasda");

        if(error instanceof BadInput)
          alert('Bad input.');
        else  throw error;
    });
   }

   updatePost(post){
     //update only some properties
     this.service.update(post)
     .subscribe(
       response =>{
       console.log(response)
     });
     //this.http.put(this.url,JSON.stringify(post));
   }

   deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1)

     this.service.delete(post.id)
     .subscribe(null,
      (error: AppError) => {
        this.posts.splice(index,0,post)

      if(error instanceof NotFoundError)
        alert('This post has already been deleted')  
      else  throw error;
    });
   }
}
 