import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import selectReducer from './select'
import dateRangeReducer from './dateRange'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    select: selectReducer,
    dateRange: dateRangeReducer
})