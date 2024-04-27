import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BodySection from './BodySection'
import { StyleSheet, css } from 'aphrodite'

export default class BodySectionWithMarginBottom extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  } 
  render() {
    const { title, children } = this.props;
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
})
