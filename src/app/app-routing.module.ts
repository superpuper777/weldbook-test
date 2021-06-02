
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoListComponent } from './components/videos/video-list/video-list.component';

const routes: Routes = [
  { path: 'videos', component: VideoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
