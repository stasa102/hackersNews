import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
})
export class StoriesListComponent {
  @Input() loadedStories: any = [];
}
