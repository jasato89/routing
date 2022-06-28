import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item/post-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { PostDetailsComponent } from './components/post-details/post-details/post-details.component';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    NavBarComponent,
    HomeComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
