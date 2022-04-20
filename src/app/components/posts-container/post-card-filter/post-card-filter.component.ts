import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/interfaces';

@Component({
  selector: 'app-post-card-filter',
  templateUrl: './post-card-filter.component.html',
  styleUrls: ['./post-card-filter.component.scss'],
})
export class PostCardFilterComponent implements OnInit {
  @Input() users: IUser[];
  constructor() {}

  ngOnInit(): void {}
  //TODO: create a method that build the options to be show in the select input, add one option manualy call "None" and show that option as defaul
  //TODO: call the method getPosts to update the lists of posts
  //TODO: calld the subject postListUpdated.nex() from the PostService
}
