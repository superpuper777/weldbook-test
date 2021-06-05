import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'services/data.service';
import { FavoriteService } from './../../../services/favorite.service';
import { map, tap } from "rxjs/operators";

import { Video } from './../../../models/video';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  sortItems =  ["date", "rating", "relevance", "title", "videoCount", "viewCount",];
  selectedSortItem = this.sortItems[1];
  subscription: Subscription;
  videos: Video[];
  videos$
  nextPageToken;
  isShow = false;
  constructor(private dataService: DataService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
  }

  searchTermChange(searchTerm: string) {
    this.videos$ = this.dataService.getVideos(searchTerm).pipe(
      map((items) => {
        return items.map(item => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
          };
        });
      })
    )
  }

  addToFavorites(video) {
    this.favoriteService.addToFavorite(video);
  }

  nextVideos() {
    this.videos$ = this.dataService.nextVideos().pipe(
      tap(() => this.isShow = !this.isShow),
      map((items) => {
        return items.map(item => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
          };
        });
      })
    )  
  }

  prevVideos() {
    this.videos$ = this.dataService.prevVideos().pipe(
      map((items) => {
        return items.map(item => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
          };
        });
      })
    )
  }

  sortHandler(value) {
    this.videos$ = this.dataService.changeOrder(value).pipe(
      map((items) => {
        return items.map(item => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
          };
        });
      })
    )
  }
}
