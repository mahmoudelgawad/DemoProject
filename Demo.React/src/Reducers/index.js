import {createStore,combineReducers } from 'redux';
import BooksReducer from './reducer_books';
const rootReducer = combineReducers({
    books: BooksReducer
});

const store=createStore(rootReducer);

export default  store;