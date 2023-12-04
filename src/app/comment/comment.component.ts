import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() commentId: any;
  @Input() childCommentIds: any;
  @Input() childCommentId: any;
  comment: any;
  childComment: any;
  storyId: any;
  parent: any;
  @Input() expanded: boolean = true;
  constructor(
    private homepageService: HomepageService,
    private el: ElementRef
  ) {}

  toggleComm() {
    let btn = this.el.nativeElement.getElementsByClassName('commentBody');
    if (this.expanded === true) {
      this.expanded = false;
    } else {
      this.expanded = true;
      btn.classList?.remove('hidden');
    }
  }

  ngOnInit() {
    this.homepageService.onFetchComment(this.commentId).subscribe({
      next: (response) => {
        this.comment = response;
        console.log('comment: ', this.comment);
        this.childCommentIds = this.comment?.kids;
        this.childCommentIds?.forEach((el: any) => {
          this.childCommentId = el;
        });
      },
    });
  }
}
