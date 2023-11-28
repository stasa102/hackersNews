import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
})
export class StoriesListComponent implements OnInit {
  @Input() loadedStories: any = [];
  loadedStoryIds: number[] = [];
  error: string = '';
  firstIndex: number = 0;
  indexToLoad: number = 30;

  constructor(private homepageService: HomepageService) {}

  ngOnInit() {
    return (
      this.homepageService.onFetchTopStoriesIds().subscribe((response: any) => {
        this.loadedStoryIds = response;
      }),
      (error: string) => {
        this.error = error;
        console.log(error);
      }
    );
  }

  loadTenMore() {
    this.firstIndex = this.indexToLoad;
    this.indexToLoad = this.indexToLoad + 30;
  }
}
