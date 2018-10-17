import { Component, Input, OnInit } from '@angular/core';
import { VideoDetails } from '../app.types';

@Component({
  selector: 'app-view-breakdown',
  templateUrl: './view-breakdown.component.html',
  styleUrls: ['./view-breakdown.component.css']
})
export class ViewBreakdownComponent implements OnInit {
  @Input() views: VideoDetails[];

  constructor() { }

  ngOnInit() {
  }

}
