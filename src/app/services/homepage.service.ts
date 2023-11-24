import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  baseUrl: string = ' https://hacker-news.firebaseio.com/v0/';
  constructor(private http: HttpClient) {}

  onFetchTopStoriesIds() {
    return this.fetchTopStoriesIds();
  }
  onFetchStory(storieId: number) {
    return this.fetchStory(storieId);
  }
  onFetchCommentsIds() {
    return this.fetchCommentsIds();
  }

  private fetchTopStoriesIds() {
    return this.http.get(`${this.baseUrl}topstories.json?print=pretty`);
  }
  private fetchStory(storieId: number) {
    return this.http.get(`${this.baseUrl}item/${storieId}.json?print=pretty`);
  }
  private fetchCommentsIds() {
    return this.http.get(`${this.baseUrl}comments.json?print=pretty`);
  }
}
