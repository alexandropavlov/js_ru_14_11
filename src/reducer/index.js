import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import selectReducer from './select'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    select: selectReducer
})