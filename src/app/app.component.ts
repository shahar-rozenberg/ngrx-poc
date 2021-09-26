import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {selectBookCollection, selectBooks} from './state/books.selectors';
import {addBook, removeBook, retrievedBookList,} from './state/books.actions';
import {GoogleBooksService} from './books-list/books.service';
import {Book} from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId): void {
    this.store.dispatch(addBook({bookId}));
  }

  onRemove(bookId): void {
    this.store.dispatch(removeBook({bookId}));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((books: Book[]) => this.store.dispatch(retrievedBookList({books})));
  }
}
