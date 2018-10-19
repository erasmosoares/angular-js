import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  
  posts: any[];

  private url = 'https://jsonplaceholder.typicode.com/posts';

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  //https://jsonplaceholder.typicode.com/posts
  constructor(private http: Http) {  }

   createPost(input: HTMLInputElement){
    let  post = {title: input.value};
    input.value = '';
    this.http.post(this.url,JSON.stringify(post))
    .subscribe(response =>{
        post['id'] = response.json().id;
        this.posts.splice(0,0,post); //put first position
    });
   }

   updatePost(post){
     //update only some properties
     this.http.patch(this.url+'/'+post.id,JSON.stringify({ isRead:true}))
     .subscribe(response =>{
       console.log(response.json())
     });
     //this.http.put(this.url,JSON.stringify(post));
   }

   deletePost(post){
     this.http.delete(this.url + '/'+post.id)
     .subscribe(() =>{
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1)
     });
   }
}
 