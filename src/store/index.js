import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import addCommentId from '../middlewares/addCommentId'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const loggerEnhancer = applyMiddleware(logger)
const addCommentIdEnhancer = applyMiddleware(addCommentId)

const store = createStore(reducer, {}, composeEnhancers(loggerEnhancer, addCommentIdEnhancer))

window.store = store

export default store