import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import WeatherReducer from './Weather/reducer_weather';
import PostsReducer from './Posts/reducer_posts';
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    weather:WeatherReducer,
    posts:PostsReducer,
    form:formReducer
});

export default rootReducer;