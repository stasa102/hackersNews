import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoryComponent } from './story/story.component';

export const routes: Routes = [
  { path: '', component: StoriesListComponent },
  { path: 'item/:id', component: StoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
