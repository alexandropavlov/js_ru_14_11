import React from 'react'

export default (Component) => class Accordion extends React.Component {
    constructor() {
        super()
        this.state = {
            openItemId: null
        }
    }

    render() {
        const { articles } = this.props
        return <Component {...this.props} {...this.state} createToggleOpen = {this.createToggleOpen} openItemId = {this.state.openItemId}/>
    }

    createToggleOpen = id => ev => {
        //Хорошо, но я предпочитаю тернарным оператором писать вместо 2-х setState
        if (this.state.openItemId == id) {
            this.setState({
                openItemId: null
            })
        } else {
            this.setState({
                openItemId: id
            })
        }
    }

}
