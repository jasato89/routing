import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post/post';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceHolderService {
  readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';


  constructor(private http : HttpClient) { }

  getPosts() :Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + '/posts');
  }

  getPostById(id: number) :Observable<Post> {
    return this.http.get<Post>(this.baseUrl + '/posts/' + id);
  }

}

