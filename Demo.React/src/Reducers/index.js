import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import WeatherReducer from './Weather/reducer_weather';
import PostsReducer from './Posts/reducer_posts';
import AuthenticationReducer from './Authentication/reducer_authentication';
import RedirectUrlReducer from './RedirectUrl/reducer_redirect_url';
const rootReducer = combineReducers({
    auth: AuthenticationReducer,
    books: BooksReducer,
    activeBook: ActiveBook,
    weather: WeatherReducer,
    posts: PostsReducer,
    form: formReducer,
    url: RedirectUrlReducer
});

export default rootReducer;