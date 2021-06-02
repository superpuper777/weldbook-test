import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  key = "AIzaSyAxGX5GKFB4wSl_Xj09ez3ESRaNbnt429Q";
  
  constructor(private httpClient: HttpClient) { }

  get(searchTerm: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=channel&key=${this.key}`
    )
      .pipe(
        map((response: any) => response.items)
      );
  }


}
