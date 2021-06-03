import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoListComponent } from './components/videos/video-list/video-list.component';
import { FavoritevideosComponent } from './components/favorite-videos/favorite-videos.component';
const routes: Routes = [
  { path: 'videos', component: VideoListComponent },
  { path: 'favorites', component: FavoritevideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
