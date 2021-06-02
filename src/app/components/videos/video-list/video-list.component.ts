import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'services/data.service';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  subscription: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  searchTermChange(searchTerm: string) {
    this.subscription = this.dataService
      .get(searchTerm)
      .subscribe((res) => {
        console.log(res)
      }); 
  }

}
