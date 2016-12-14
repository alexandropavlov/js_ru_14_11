import { LOAD_COMMENT_PAGE, START, SUCCESS } from '../constants'
import { arrayToMap, ReducerState } from '../utils'

const defaultState = {
    entities: {},
    loading: false,
    total: null
}

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