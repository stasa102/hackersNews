import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  baseUrl: string = ' https://hacker-news.firebaseio.com/v0/';
  constructor(private http: HttpClient) {}

  onFetchTopStoriesIds() {
    return this.fetchTopStoriesIds();
  }
  onFetchStory(storyId: number) {
    return this.fetchStory(storyId);
  }
  onFetchComment(commentId: number) {
    return this.fetchComment(commentId);
  }

  private fetchTopStoriesIds() {
    return this.http.get(`${this.baseUrl}topstories.json?print=pretty`);
  }
  private fetchStory(storyId: number) {
    return this.http.get(`${this.baseUrl}item/${storyId}.json?print=pretty`);
  }
  private fetchComment(commentId: number) {
    return this.http.get(`${this.baseUrl}item/${commentId}.json?print=pretty`);
  }
}
