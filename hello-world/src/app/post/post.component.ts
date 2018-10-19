import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  
  posts: any[];

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  //https://jsonplaceholder.typicode.com/posts
  constructor(private service: PostService) {  }

   createPost(input: HTMLInputElement){
    let  post = {title: input.value};
    input.value = '';
    this.service.createPost(post)
    .subscribe(response =>{
        post['id'] = response.json().id;
        this.posts.splice(0,0,post); //put first position
    });
   }

   updatePost(post){
     //update only some properties
     this.service.updatePost(post)
     .subscribe(response =>{
       console.log(response.json())
     });
     //this.http.put(this.url,JSON.stringify(post));
   }

   deletePost(post){
     this.service.deletePost(post.id)
     .subscribe(() =>{
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1)
     });
   }
}
 