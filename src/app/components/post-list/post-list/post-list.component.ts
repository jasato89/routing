import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { JSONPlaceHolderService } from 'src/app/services/JSONPLaceHolder/jsonplace-holder.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  constructor(private jsonPlaceHolder : JSONPlaceHolderService) { }

  ngOnInit(): void {
    this.jsonPlaceHolder.getPosts().subscribe((data) => {
      this.posts = data;
    })

  }

}
