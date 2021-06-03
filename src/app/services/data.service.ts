import { Video } from './../models/video';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  key = "AIzaSyAxGX5GKFB4wSl_Xj09ez3ESRaNbnt429Q";
  videos: Video[] = [];
  quantity = 25;
  nextPageToken = '';
  constructor(private httpClient: HttpClient) { }

  getVideos(searchTerm: string) {
    return this.httpClient.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.quantity}&q=${searchTerm}&key=${this.key}`
    )
    //   .pipe(
    //     map((response: any) => this.nextPageToken = response.nextPageToken)
    // );

    .pipe(
      map((response: any) => this.nextPageToken = response.items)
  );

  }
  addMoreVideos(): string{
    // this.quantity = this.quantity + 12;
    return this.nextPageToken;
  }
}
