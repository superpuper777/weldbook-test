import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './components/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VideoComponent } from './components/videos/video/video.component';
import { VideoListComponent } from './components/videos/video-list/video-list.component';
import { FavoritevideosComponent } from './components/favorite-videos/favorite-videos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DataInterceptor, MockDataInterceptor } from './data.interceptor';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoListComponent,
    FavoritevideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    HttpClientModule,
    
  ],
  providers: [
    DataService, {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockDataInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
