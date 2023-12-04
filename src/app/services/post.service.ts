import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  constructor(private client : HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPost(){
    return this.client.get(this.url);
  }

}
