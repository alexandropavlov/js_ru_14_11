import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted', this.containerRef)
        console.log('---', this.refs)
    }

    componentWillReceiveProps(nexProps) {
        //console.log('isEqual', Object.keys(nexProps).every(key => nexProps[key] == this.props[key]))
        //console.log('---', 'AL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'AL will update')
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }


    render() {
        const { articles, isOpen, toggleOpenItem, select } = this.props

        let filteredArticles = null

        if (select.length) {
            filteredArticles = articles.filter(article => {
                let res = false
                select.forEach((item) => {
                    console.log(item, article);
                    if (item.value === article.id) {
                        res = true
                    }
                })
                return res
            })
        } else {
            filteredArticles = articles;
        }



        const articleItems = filteredArticles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen(article.id)}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    select: state.select
}))(accordion(ArticleList))