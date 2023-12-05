import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  loadedStoriesIds: number[] = [];
  @Input() storyId: any;
  @Input() index: number = 0;
  @Input() story: any;
  urlParam: any;
  baseUrl: any;
  error: string = '';
  // loggingStoryId: any;
  constructor(
    private homepageService: HomepageService,
    private router: Router
  ) {}

  // get baseUrl variable from service for http.get
  public get displayBaseUrl(): string {
    return this.homepageService.baseUrl;
  }
  commentsClicked() {
    this.storyId = this.story.id;
    this.router.navigate(['/item', this.storyId]);
  }

  ngOnInit() {
    this.homepageService.onFetchStory(this.storyId).subscribe({
      next: (responseData) => {
        this.story = responseData;
      },
      error: (error: string) => {
        this.error = error;
        console.log(error);
      },
    });
  }
}
