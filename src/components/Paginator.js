import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Paginator extends Component {
    static propTypes = {
        
    };

    render() {
        return (
            <div>
            	{this.getButtons()}	
            </div>
        )
    }

    getButtons() {
    	const { number, link } = this.props
    	const buttons = [];
    	for (let i = 0; i < number; i++) {
    		buttons[i] = (<Link key = {i} to = {link + (i + 1)}>{i + 1}</Link>)
    	}
    	return buttons;
    }
}

export default Paginator