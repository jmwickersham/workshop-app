import { Component, OnInit } from '@angular/core';

import { videos } from '../sample-data';
import { Video } from '../app.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[] = videos;
  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
