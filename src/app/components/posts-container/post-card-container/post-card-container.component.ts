import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-card-container',
  templateUrl: './post-card-container.component.html',
  styleUrls: ['./post-card-container.component.scss'],
})
export class PostCardContainerComponent implements OnInit {
  @Input() posts: Post[];
  constructor() {}

  ngOnInit(): void {}
}
