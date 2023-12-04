import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
})
export class StoriesListComponent implements OnInit {
  loadedStoryIds: number[] = [];
  error: string = '';
  firstIndex: number = 0;
  indexToLoad: number = 5;

  constructor(private homepageService: HomepageService) {}

  ngOnInit() {
    this.homepageService.onFetchTopStoriesIds().subscribe({
      next: (response: any) => {
        this.loadedStoryIds = response;
      },
      error: (error: string) => {
        this.error = error;
        console.log(error);
      },
    });
  }

  loadTenMore() {
    this.firstIndex = this.indexToLoad;
    this.indexToLoad = this.indexToLoad + 30;
  }
}
