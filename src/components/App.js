import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import { selectUpdate } from '../AC/select'
import { connect } from 'react-redux'

class App extends Component {

    render() {
        const { articles, select } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select options = {options} value = {select} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => {
        const { selectUpdate } = this.props
        selectUpdate(selected)
    }
}

export default connect(state => ({
    articles: state.articles,
    select: state.select
}), {
    selectUpdate
})(App)