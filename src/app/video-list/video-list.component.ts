import { Component, Input, OnInit } from '@angular/core';

import { Video } from '../app.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];
  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
