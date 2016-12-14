import React, { Component, PropTypes } from 'react'
import Comments from '../components/Comments'

class CommentsPage extends Component {
    static propTypes = {
        
    };

    render() {
        return (
            <div>
            	<Comments page={+this.props.params.page} />
            </div>
        )
    }
}

export default CommentsPage