import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, article)
}, new Map({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.articleId)
        case ADD_COMMENT:
        	let article = articlesState.get(payload.articleId)
            //не мутируй данные! Мы для этого даже immutable завели
        	article.comments.push(payload.comment.id)
            return articlesState.set(payload.articleId, article)
    }

    return articlesState
}
