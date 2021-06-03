import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './../../services/favorite.service';
import { Observable } from 'rxjs';
import { Video } from './../../models/video';
@Component({
  selector: 'app-favorite-videos',
  templateUrl: './favorite-videos.component.html',
  styleUrls: ['./favorite-videos.component.scss']
})
export class FavoritevideosComponent implements OnInit {
  videos$: Observable<Video[]>;
  videos: Video[] = [];
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.videos$ = this.favoriteService.videosSubject;
    this.videos = JSON.parse(localStorage.getItem('videos')|| '{}');
  }

  deletePhoto(video): void {
    this.favoriteService.removeVideo(video.id);
    this.videos = JSON.parse(localStorage.getItem('videos') || '{}');
  }

}
