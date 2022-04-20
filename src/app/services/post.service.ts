import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, Subject, tap } from 'rxjs';
import { Post } from '../models/post.model';
import { environment } from '../../environments/environment';
import { IUser } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: Post[];
  public users: IUser[];
  postListUpdated: Subject<void> = new Subject();

  constructor(private http: HttpClient) {}

  getPosts(userId?: number): Observable<Post[]> {
    //TODO: add new HttpParams to add params in case is need to filter

    if (this.posts) {
      return of(this.posts);
    }

    return this.http.get<Post[]>(`${environment.baseUrl}/posts`).pipe(
      tap((resp) => {
        this.posts = resp;
      })
    );
  }

  getUsers(): Observable<IUser[]> {
    if (this.users) {
      return of(this.users);
    }
    return this.http.get<IUser[]>(`${environment.baseUrl}/users`).pipe(
      tap((resp) => {
        this.users = resp;
      })
    );
  }

  editPost() {
    // TODO: call API up edit post by providing userId
  }

  createPost() {
    // TODO: call API up create post
  }

  getPostById(postId: number) {
    return [...this.posts].find(({ id }) => id === postId);
  }

  getPostComments(postId: number) {
    return this.http.get<Post[]>(
      `${environment.baseUrl}/posts/${postId}/comments`
    );
  }

  getUserByPostId(postUserId: number) {
    return [...this.users].find(({ id }) => id === postUserId);
  }
}
