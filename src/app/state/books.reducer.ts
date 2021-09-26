import { createReducer, on, Action } from '@ngrx/store';
import { retrievedBookList } from './books.actions';
import {Book} from '../book';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, {books}) => [...books])
);
