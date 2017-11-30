import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import ArticleReducer from './articles-reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  articles: ArticleReducer,
});

export default rootReducer;
