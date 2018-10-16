import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { Video, Filter } from '../app.types';
import { VideoLoaderService } from '../video-loader.service';

const videoIdQueryParam = 'videoId';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  videos: Observable<Video[]>;
  selectedVideo: Observable<Video>;
  filter: Filter;

  constructor(service: VideoLoaderService, private ar: ActivatedRoute, private router: Router) {
    this.videos = service.loadVideos();
    this.selectedVideo = this.ar.queryParams.pipe(
        map(qp => qp[videoIdQueryParam]),
        switchMap((id: string) => this.videos.pipe(
          map(vl => vl.find(v => v.id === id)))
        ));
  }

  setSelectedVideo(v: Video) {
    this.router.navigate([], { queryParams: { [ videoIdQueryParam ]: v.id }, queryParamsHandling: 'merge' });
  }
}
