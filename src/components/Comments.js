import React, { Component, PropTypes } from 'react'
import Paginator from './Paginator'
import Comment from './Comment'
import Loader from './Loader'
import { connect } from 'react-redux'
import { loadCommentPage } from '../AC/commentPages'



class Comments extends Component {
    static propTypes = {
        
    };

    componentDidMount() {
        const { commentList, page, loadCommentPage, loading } = this.props

        if (!loading && !commentList) loadCommentPage(page)
    }

    componentWillReceiveProps(nextProps) {
		const { commentList, page, loadCommentPage, loading } = nextProps

        if (!loading && !commentList) loadCommentPage(page)
    }


    render() {
    	const { page, commentList } = this.props
        return (
            <div>
            	{this.getComments()}
                {this.getPaginator()}
            </div>
        )
    }

    getComments() {
    	const { commentList, loading } = this.props
    	if (loading) {
            return (<Loader />)
        } else if (!loading && commentList) {
    		return commentList.map((comment) => (<Comment key = {comment.id} comment = {comment} />))
    	} else {
    		return null
    	}
    }

    getPaginator() {
        const { total } = this.props
        if (total) {
            return (<Paginator number = {Math.ceil(total / 5)} link = "/comments/" />)
        } else {
            return null
        }
    }
}

export default connect((state, props) => {
    return {
        commentList: state.commentPages.entities[props.page],
        loading: state.commentPages.loading,
        total: state.commentPages.total,
    }
}, {
    loadCommentPage
})(Comments)