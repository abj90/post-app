import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/interfaces';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
})
export class PostsContainerComponent implements OnInit {
  public posts: Post[];
  public users: IUser[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((resp) => {
      this.posts = resp;
    });

    this.postService.getUsers().subscribe((resp) => {
      this.users = resp;
    });
  }

  //TODO: create a method that subscribe the subject postListUpdated and update the variable posts
}
