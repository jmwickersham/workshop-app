import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from './app.types';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(API_URL + '/videos');
  }
}
