import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostContainerComponent } from './components/create-post-container/create-post-container.component';
import { DetailPostContainerComponent } from './components/detail-post-container/detail-post-container.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';

const routes: Routes = [
  { path: 'posts', component: PostsContainerComponent },
  { path: 'posts/:id', component: DetailPostContainerComponent },
  { path: 'create-posts', component: CreatePostContainerComponent },
  { path: 'edit-posts/:id', component: CreatePostContainerComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PostsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
