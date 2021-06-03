import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'services/data.service';
import { FavoriteService } from './../../../services/favorite.service';

import { Video } from './../../../models/video';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  subscription: Subscription;
  videos: Video[];
  nextPageToken;
  constructor(private dataService: DataService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
  }

  searchTermChange(searchTerm: string) {
    this.subscription = this.dataService
      // .getVideos(searchTerm)
      // .subscribe((videos) => {
      //   this.videos = videos;
      //   console.log(this.videos);
      // });
      .getVideos(searchTerm)
      .subscribe((items: any) => {
        this.videos = items.map(item => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
          };
        });
      });
  }

  addToFavorites(video) {
    this.favoriteService.addToFavorite(video);
  }

  addMoreVideos() {

    // this.nextPageToken= this.dataService.addMoreVideos();
    // this.subscription = this.dataService
    //   .getNextVideos(nextPageToken()
    //   .subscribe((videos) => {
    //     this.videos = videos;
    //     console.log(this.videos);
    //   });
    
  }

}
