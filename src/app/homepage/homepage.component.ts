import { Component } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [HomepageService],
})
export class HomepageComponent {
  constructor() {}
}
