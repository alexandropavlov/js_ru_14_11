import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment, loadComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        //commentIds: PropTypes.array.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps(nextProps) {
        console.log(this.props.comments);
        if (!this.props.isOpen && nextProps.isOpen && !this.props.comments.length) {
            this.props.loadComments()
        }
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { article, comments, isOpen, toggleOpen } = this.props
        if (!article.comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { article, comments, isOpen, addComment, loading } = this.props
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />

        if (!isOpen || !article.comments.length) return <div>{commentForm}</div>

        if (isOpen && loading) return <div><Loader/>{commentForm}</div>
        
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({
    comments: state.comments.get('entities').size ? (props.article.comments || []).map(id => state.comments.getIn(['entities', id])) : [],
    loading: state.comments.get('loading')
}), { addComment, loadComments })(toggleOpen(CommentList))