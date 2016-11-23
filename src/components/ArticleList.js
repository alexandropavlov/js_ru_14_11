import React, { Component }  from 'react'
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

export default accordion(ArticleList)