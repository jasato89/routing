import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
