import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
})
export class PostsContainerComponent implements OnInit {
  public posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((resp) => {
      console.log('post', resp);
      this.posts = resp;
    });

    this.postService.getUsers().subscribe((resp) => {
      console.log('users', resp);
    });
  }
}
