import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent implements OnInit{
  title = 'prj-api';
  posts : any;
  constructor(private post : PostService){}

  ngOnInit(){
    this.post.getPost().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }

}
