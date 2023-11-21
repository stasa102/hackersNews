import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [HomepageService],
})
export class HomepageComponent implements OnInit {
  loadedStoriesIds: any = [];
  loadedStories: any = [];
  storieId: any;
  baseUrl: any;

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
        this.loadedStoriesIds = response;
        this.loadedStoriesIds.forEach((storieId: any) => {
          this.http
            .get(`${this.displayBaseUrl}/item/${storieId}.json?print=pretty`)
            .subscribe((response) => {
              // console.log(response);
              this.loadedStories.push(response);
            });
        });
      });
  }
}
