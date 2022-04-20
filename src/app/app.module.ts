import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { CreatePostContainerComponent } from './components/create-post-container/create-post-container.component';
import { EditPostContainerComponent } from './components/edit-post-container/edit-post-container.component';
import { DetailPostContainerComponent } from './components/detail-post-container/detail-post-container.component';
import { PostCardComponent } from './components/posts-container/post-card/post-card.component';
import { PostCardContainerComponent } from './components/posts-container/post-card-container/post-card-container.component';
import { PostCardFilterComponent } from './components/posts-container/post-card-filter/post-card-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    CreatePostContainerComponent,
    EditPostContainerComponent,
    DetailPostContainerComponent,
    PostCardComponent,
    PostCardContainerComponent,
    PostCardFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
