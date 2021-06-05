import { Video } from './../models/video';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  key = "AIzaSyAxGX5GKFB4wSl_Xj09ez3ESRaNbnt429Q";
  videos: Video[] = [];
  quantity = 25;
  nextPageToken = '';
  prevPageToken = '';
  currentTerm;
  currentToken;
  // sortItem = 'rating';
  constructor(private httpClient: HttpClient) { }

  getVideos(searchTerm: string, pageToken = '', sortItem  = 'rating') {
    this.currentTerm = searchTerm;
    this.currentToken = pageToken;
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.quantity}&q=${searchTerm}&key=${this.key}&pageToken=${pageToken}&order=${sortItem}`;
    return this.httpClient.get(URL)
      .pipe(
        map((response: any) => {
          const { nextPageToken, prevPageToken, items } = response;
          this.nextPageToken = nextPageToken;
          this.prevPageToken = prevPageToken ? prevPageToken : '';
          return items;
        })
      );
  }

  nextVideos() {
    return this.getVideos(this.currentTerm, this.nextPageToken)
  }

  prevVideos() {
    return this.getVideos(this.currentTerm, this.prevPageToken);
  }

  changeOrder(sortItem) {
    console.log(sortItem)
    return this.getVideos(this.currentTerm, this.currentToken, sortItem )
  }
}
