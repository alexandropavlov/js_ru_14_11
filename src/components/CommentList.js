import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    constructor() {
        super()
        this.state = {
            newComment: {
                user: null,
                title: null,
                text: null
            }
        }
    }


    componentWillReceiveProps() {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }

    componentDidUpdate() {
        //console.log('---', 'CL will update')
        console.log(this.state);
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getCommentSection()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getCommentSection() {
        const { comments, isOpen } = this.props
        if (!isOpen || !comments.length) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <ul>{commentItems}</ul>
                {this.getForm()}
            </div>
        )
    }

    getForm() {
        return (
            <form>
                <input
                    style={{display: "block"}}
                    type="text"
                    placeholder="Enter your name"
                    value={this.state.user} 
                    onChange={this.handleChange.bind(this, 'user')}
                />
                <input
                    style={{display: "block"}}
                    type="text"
                    placeholder="Enter title"
                    value={this.state.title} 
                    onChange={this.handleChange.bind(this, 'title')}
                />
                <textarea
                    style={{display: "block"}}
                    rows={5}
                    placeholder="Enter comment"
                    value={this.state.text} 
                    onChange={this.handleChange.bind(this, 'text')}
                ></textarea>
                <input
                    style={{display: "block"}}
                    type="submit"
                    onClick={this.handleAddComment }
                />
            </form>
        )
    }

    handleChange (name, e) {
        let change = this.state.newComment;
        change[name] = e.target.value;
        this.setState({
            newComment: change
        });
    }

    handleAddComment() {

    }
}

export default toggleOpen(CommentList)