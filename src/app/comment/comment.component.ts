import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  loadedCommentsIds: any = [];
  loadedComments: any = [];
  commentId: any = [];
  error: string = '';

  constructor(
    private homepageService: HomepageService,
    private http: HttpClient
  ) {}

  public get displayBaseUrl(): string {
    return this.homepageService.baseUrl;
  }

  // onClickedComment() {
  //   return this.homepageService
  //     .onFetchTopStoriesIds()
  //     .subscribe((response: any) => {
  //       response.forEach((storieId: any) => {
  //         this.http
  //           .get(`${this.displayBaseUrl}/item/${storieId}.json?print=pretty`)
  //           .subscribe(
  //             (responseData) => {
  //               // Shallow Copy
  //               this.loadedComments = [...this.loadedComments, responseData];
  //             },
  //             (error: string) => {
  //               this.error = error;
  //               console.log(error);
  //             }
  //           );
  //       });
  //     });
  // }

  onClickedComment() {}

  ngOnInit() {}
}
