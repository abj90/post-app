import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post-container',
  templateUrl: './create-post-container.component.html',
  styleUrls: ['./create-post-container.component.scss'],
})
export class CreatePostContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //TODO: create a reactive form and create, create a new object post (by intanciating the class Post) using the fields form the form
  //TODO: call the post service and invoke the method createPost, pass as paramented the post object recently created
}
