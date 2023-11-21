import { Component, Input, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.scss'],
})
export class StorieComponent implements OnInit {
  loadedStoriesIds: number[] = [];
  @Input() loadedStories: any = [];
  storieId: any;
  baseUrl: any;
  error: string = '';

  constructor(
    private homepageService: HomepageService,
    private http: HttpClient
  ) {}

  // get baseUrl variable from service for http.get
  public get displayBaseUrl(): string {
    return this.homepageService.baseUrl;
  }

  ngOnInit() {
    return this.homepageService
      .onFetchTopStoriesIds()
      .subscribe((response: any) => {
        response.forEach((storieId: any) => {
          this.http
            .get(`${this.displayBaseUrl}/item/${storieId}.json?print=pretty`)
            .subscribe(
              (responseData) => {
                // Shallow Copy
                this.loadedStories = [...this.loadedStories, responseData];
              },
              (error: string) => {
                this.error = error;
                console.log(error);
              }
            );
        });
      });
  }
}
