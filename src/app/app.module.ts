import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';
import { ViewBreakdownComponent } from './view-breakdown/view-breakdown.component';

import { EffectsService } from './effects.service';

import { AppState, filterReducer, selectedVideoIdReducer, videoListReducer } from './state';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoEmbedderComponent,
    ViewBreakdownComponent,
    ViewFilterComponent,
    VideoPreviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot<AppState> ({
      filter: filterReducer,
      selectedVideoId: selectedVideoIdReducer,
      videoList: videoListReducer
    }),
    EffectsModule.forRoot([EffectsService]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
