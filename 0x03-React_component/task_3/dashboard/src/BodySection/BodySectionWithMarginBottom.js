import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BodySection from './BodySection'
import './BodySectionWithMarginBottom.css'

export default class BodySectionWithMarginBottom extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  } 
  render() {
    const { title, children } = this.props;
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props} />
      </div>
    )
  }
}
