import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

// import { videos } from './sample-data';
import { Video } from './app.types';

const API_URL = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop-app';

  // videos: Video[] = videos;
  videos: Video[] = [];
  selectedVideo: Video;

  constructor(http: HttpClient) {
    http
      .get<Video[]>(API_URL + '/videos')
      .subscribe(videoResult => this.videos = videoResult);
  }
}
