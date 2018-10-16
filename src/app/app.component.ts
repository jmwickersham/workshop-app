import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// import { videos } from './sample-data';
import { Video, Filter } from './app.types';
import { VideoLoaderService } from './video-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop-app';

  // videos: Video[] = videos;
  videos: Observable<Video[]>;
  selectedVideo: Video;
  filter: Filter;

  constructor(service: VideoLoaderService) {
    this.videos = service.loadVideos();
  }
}
