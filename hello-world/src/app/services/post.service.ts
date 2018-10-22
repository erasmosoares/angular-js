import { NotFoundError } from './../common/not-found';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable, Pipe } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInput } from '../common/bad-input';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  createPost(post){
    return this.http.post(this.url,JSON.stringify(post))
    .pipe(catchError(this.handleError));
  }

  updatePost(post){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify({ isRead:true}))
    .pipe(catchError(this.handleError));
  }

  deletePost(id){
    return this.http.delete(this.url + '/'+id)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response){
    if (error.status ===404)
    return throwError(new NotFoundError(error));

    if(error.status === 400)
    return throwError(new BadInput(error.json()))
  
    return throwError(new AppError(error));
  }
}
