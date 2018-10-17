import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { VideoLoaderService } from './video-loader.service';
import { videoIdQueryParam } from './dashboard/dashboard.component';
import { VideoListArrived, SelectVideo } from './state';

@Injectable({
  providedIn: 'root'
})
export class EffectsService {
  constructor(
    private service: VideoLoaderService,
    private ar: ActivatedRoute
  ) { }

  @Effect() loadData = this.service.loadVideos()
    .pipe(map(vl => new VideoListArrived(vl)));

  @Effect() getSelectedIdFromWuryParam =  this.ar.queryParams.pipe(
    map(qp => qp[videoIdQueryParam]),
    map(id => new SelectVideo(id))
  );
}
