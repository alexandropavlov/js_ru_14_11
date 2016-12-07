import { ADD_COMMENT } from '../constants'

export default store => next => action => {
  //лучше придумать более общий способ; через мидлвару будут проходить все экшины, их стоит делать максимально реюзабельными
	if (action.type = ADD_COMMENT) {
		console.log('middleware add_comment new', store.getState().comments.toArray().length);
	    //Плохая логика для генерации id
	    //лучше не мутировать объект
		action.payload.comment.id = store.getState().comments.toArray().length
	}
    //console.log('---', 'before: ', store.getState())
    //console.log('---', 'dispatching', action)
    next(action)
    //console.log('---', 'after', store.getState())
}
