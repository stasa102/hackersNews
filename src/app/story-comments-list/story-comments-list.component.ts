import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-story-comments-list',
  templateUrl: './story-comments-list.component.html',
  styleUrls: ['./story-comments-list.component.scss'],
})
export class StoryCommentsListComponent implements OnInit {
  story: any;
  storyId: any;
  loadedCommentsIds: any;
  comment: any;
  commentId: any;
  error: string = '';
  expanded: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private homepageService: HomepageService
  ) {}

  public get displayBaseUrl(): string {
    return this.homepageService.baseUrl;
  }

  ngOnInit() {
    this.storyId = this.route.snapshot.paramMap.get('storyId');

    this.homepageService.onFetchStory(this.storyId).subscribe({
      next: (responseData) => {
        this.story = responseData;
        this.loadedCommentsIds = this.story.kids;
        // console.log(this.loadedCommentsIds);

        this.loadedCommentsIds.forEach((commentId: any) => {
          this.homepageService.onFetchComment(commentId).subscribe({
            next: (response) => {
              this.comment = response;
              // console.log(this.comment);
            },
          });
        });
      },
      error: (error) => {
        this.error = error;
        console.log(error);
      },
    });
  }
}
