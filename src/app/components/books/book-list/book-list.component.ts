import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'services/data.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
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
