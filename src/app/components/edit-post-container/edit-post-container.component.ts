import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post-container',
  templateUrl: './edit-post-container.component.html',
  styleUrls: ['./edit-post-container.component.scss'],
})
export class EditPostContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //TODO: create reactive form and
  //TODO: allow user submit the data to be changed on the post
  //TODO: invoke the method editPost from PostService
  //TODO call a toast alert indicating if the operation has been succefull
}
