import { LOAD_COMMENT_PAGE, START, SUCCESS } from '../constants'
import { arrayToMap, ReducerState } from '../utils'

const defaultState = {
    entities: {},
    loading: false,
    total: null
}

//Я б хранил это в основном редюсере комментов. 
//+ Хнарил бы только id по номеру страницы, а семи комменты в entities, ведь им не важно как их достали, важно что это за сущность
//+ Лучше бы здесь тоже immutable использовать, а то неконсистентные данные - зло
export default (commentPages = defaultState, action) => {
    const { type, payload, response } = action

    switch (type) {
        case LOAD_COMMENT_PAGE + START:
            const oldCommentPages = {}
            Object.assign(oldCommentPages, commentPages.entities)
            return {
                entities: oldCommentPages,
                loading: true,
                total: commentPages.total
            }

        case LOAD_COMMENT_PAGE + SUCCESS:
            const newCommentPages = {}
            Object.assign(newCommentPages, commentPages.entities, {
                [action.payload.number]: action.response.records
            })
            return {
                entities: newCommentPages,
                loading: false,
                total: action.response.total
            }
    }

    return commentPages
}
