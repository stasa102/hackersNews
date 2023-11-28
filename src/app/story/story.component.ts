import { Component, Input, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  loadedStoriesIds: number[] = [];
  @Input() storyId: any;
  @Input() index: number = 0;
  story: any;
  baseUrl: any;
  error: string = '';

  constructor(private homepageService: HomepageService) {}

  // get baseUrl variable from service for http.get
  public get displayBaseUrl(): string {
    return this.homepageService.baseUrl;
  }

  ngOnInit() {
    return this.homepageService.onFetchStory(this.storyId).subscribe(
      (responseData) => {
        // Shallow Copy
        this.story = responseData;
      },
      (error: string) => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
