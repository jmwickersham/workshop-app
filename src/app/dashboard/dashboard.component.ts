import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { VideoLoaderService } from '../video-loader.service';
import { StateService } from '../state.service';

import { Video, Filter } from '../app.types';
import { AppState, VideoListArrived, SelectVideo, FilterChange } from '../state';

const videoIdQueryParam = 'videoId';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    service: VideoLoaderService,
    private ar: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private stateManager: StateService
  ) {
    service.loadVideos()
      .pipe(map(vl => new VideoListArrived(vl)))
      .subscribe(a => store.dispatch(a));
    this.ar.queryParams.pipe(
      map(qp => qp[videoIdQueryParam]),
      map(id => new SelectVideo(id))
    )
    .subscribe(a => store.dispatch(a));
    this.videos = service.loadVideos();
  }
  // videos: Observable<Video[]>;
  // selectedVideo: Observable<Video>;
  // filter: Filter;

  videos = this.stateManager.videos;
  selectedVideo = this.stateManager.selectedVideo;
  filteredViews = this.stateManager.filteredViews;

  setSelectedVideo(v: Video) {
    this.router.navigate([], { queryParams: { [ videoIdQueryParam ]: v.id }, queryParamsHandling: 'merge' });
  }

  setFilter(f: Filter) {
    this.store.dispatch(new FilterChange(f));
  }
}
