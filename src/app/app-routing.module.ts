import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StoryCommentsListComponent } from './story-comments-list/story-comments-list.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'item/:storyId', component: StoryCommentsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
