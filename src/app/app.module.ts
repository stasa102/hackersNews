import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoryComponent } from './story/story.component';
import { CommentComponent } from './comment/comment.component';
import { CommonModule } from '@angular/common';
import { StoryCommentsListComponent } from './story-comments-list/story-comments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    StoriesListComponent,
    StoryComponent,
    CommentComponent,
    StoryCommentsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
