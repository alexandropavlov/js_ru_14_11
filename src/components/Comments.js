import React, { Component } from 'react'

class Comments extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            
        }
    }

    render() {
        const { comments } = this.props;
        const hasComments = !!comments;
        let commentsItems;
        let body = null;

        if (hasComments) {
        	commentsItems = comments.map(comment => {
        		return (
	        		<li key = {comment.id}>
	        			<h4>{comment.user}</h4>
	        			<p>{comment.text}</p>
	        		</li>
        		)
        	})
        	body = this.state.isOpen ? <ul>{commentsItems}</ul> : null
        }
        
        const buttonCaption = this.state.isOpen ? 'Скрыть комментарии' : 'Показать комментарии'
        
        const button = hasComments ? <a href="#" onClick = {this.handleClick}>{buttonCaption}</a> : <p>Нет комментариев</p>

        return (
            <div>
            	{button}
                {body}
            </div>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Comments