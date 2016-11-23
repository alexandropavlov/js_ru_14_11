import React, { Component, PropTypes  }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const { articles, createToggleOpen, openItemId } = props

    const articleItems = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id == openItemId}
                toggleOpen = {createToggleOpen(article.id)}
            />
        </li>
    ))

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    createToggleOpen: PropTypes.func.isRequired,
    openItemId: PropTypes.string,
}

export default accordion(ArticleList)