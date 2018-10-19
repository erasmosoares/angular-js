import { NotFoundError } from './../common/not-found';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify({ isRead:true}));
  }

  deletePost(id){
    return this.http.delete(this.url + '/'+id)
    .pipe(
      catchError((error:Response)=>{
      if (error.status ===404)
        return throwError(new NotFoundError(error));
      
        return throwError(new AppError(error));
      })
    );
  }
}
