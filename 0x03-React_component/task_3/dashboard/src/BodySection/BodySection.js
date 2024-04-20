import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BodySection extends Component {    
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }
    render() {
        const { title, children} = this.props;
        return (
        <div className='bodySection'>
            <h2>{title}</h2>
            {children}
        </div>
        )
    }
}
