import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { SearchComponent } from './search/search.component';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';


@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    SearchComponent,
    FavoriteBooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
})

export class SharedModule {}