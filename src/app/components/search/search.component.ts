import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
} from "rxjs/operators";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl();
  subscription: Subscription;
  @Output() onEmitSearchTerm: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.searchTerm.valueChanges
    .pipe(debounceTime(10000), distinctUntilChanged())
    .subscribe( (next) => this.onEmitSearchTerm.emit(next));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
