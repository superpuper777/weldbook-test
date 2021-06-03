import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from './../models/video';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private videos: Video[] = [];
  public videosSubject = new BehaviorSubject<Video[]>([]);
  constructor() {
    
  }

  addToFavorite(video: Video): void {
    if (localStorage.getItem('videos') === null) {
      this.videos = this.onAddVideo(video);
    } else {
      this.videos = JSON.parse(localStorage.getItem('videos') || '{}');
      this.videos = this.onAddVideo(video);
    }
    this.updateFavorites();
  }

  removeVideo(id: string): void {
    this.videos = JSON.parse(localStorage.getItem('videos') || '{}');
    this.videos= this.videos.filter((video) => video.id !== id);
    this.updateFavorites();
    localStorage.setItem('videos', JSON.stringify(this.videos));
  }
  private onAddVideo(video: Video): Video[] {
    return !this.isFavoriteVideo(video.id)
      ? [...this.videos, video]
      : this.videos;
  }
  private isFavoriteVideo(id: string): boolean {
    return this.videos.some((v) => v.id === id);
  }
  private updateFavorites(): void {
    this.videosSubject.next(this.videos);
    localStorage.setItem('videos', JSON.stringify(this.videos));
  }
}
