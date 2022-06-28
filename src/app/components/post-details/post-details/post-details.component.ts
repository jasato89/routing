import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post/post';
import { JSONPlaceHolderService } from 'src/app/services/JSONPLaceHolder/jsonplace-holder.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postId! : number
  post: Post = new Post(0, 0, '','');



  constructor(private jsonPlaceHolder : JSONPlaceHolderService, private route: ActivatedRoute) {
    this.postId = this.route.snapshot.params['id']
   }

  ngOnInit(): void {
    this.jsonPlaceHolder.getPostById(this.postId).subscribe((data) => {
      this.post = data;
    });
  }

}
