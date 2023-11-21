import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  loadedStories: any = [];
  baseUrl: string = ' https://hacker-news.firebaseio.com/v0/';
  constructor(private http: HttpClient) {}

  onFetchTopStoriesIds() {
    return this.fetchTopStoriesIds();
  }

  private fetchTopStoriesIds() {
    return this.http.get(`${this.baseUrl}topstories.json?print=pretty`);
  }
}
