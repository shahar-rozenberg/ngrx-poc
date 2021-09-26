import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {Book} from '../book';

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionsState = createFeatureSelector<AppState, ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionsState,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map(id =>  books.find(book => book.id === id));
  }
);
