import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/interfaces';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-detail-post-container',
  templateUrl: './detail-post-container.component.html',
  styleUrls: ['./detail-post-container.component.scss'],
})
export class DetailPostContainerComponent implements OnInit {
  post: Post;
  user: IUser;
  postComments: Post[];
  constructor() {}

  ngOnInit(): void {}

  //TODO: take user id in the url by using Injecting an instance of ActivatedRoute
  //TODO: call the methods getPostById, getPostComments, getUserByPostId in order to get the data to show in the detail-post-card
}
