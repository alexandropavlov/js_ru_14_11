import { ADD_COMMENT } from '../constants'

export default store => next => action => {
	if (action.type = ADD_COMMENT) {
		console.log('middleware add_comment new', store.getState().comments.toArray().length);
		action.payload.comment.id = store.getState().comments.toArray().length
	}
    //console.log('---', 'before: ', store.getState())
    //console.log('---', 'dispatching', action)
    next(action)
    //console.log('---', 'after', store.getState())
}