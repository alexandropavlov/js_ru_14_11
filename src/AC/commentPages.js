import { LOAD_COMMENT_PAGE } from '../constants'


export function loadCommentPage(number) {
    console.log({
        type: LOAD_COMMENT_PAGE,
        payload: {
            number
        },
        callAPI: '/api/comment?limit=5&offset=' + ((number - 1) * 5)
    })
    return {
        type: LOAD_COMMENT_PAGE,
        payload: {
            number
        },
        callAPI: '/api/comment?limit=5&offset=' + ((number - 1) * 5)
    }
}