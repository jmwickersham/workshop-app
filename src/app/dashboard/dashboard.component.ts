import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { StateService } from '../state.service';

import { Video, Filter } from '../app.types';
import { AppState, VideoListArrived, SelectVideo, FilterChange } from '../state';

export const videoIdQueryParam = 'videoId';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private stateManager: StateService
  ) { }
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
