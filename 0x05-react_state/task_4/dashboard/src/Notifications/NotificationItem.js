import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes  from 'prop-types';


export default class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
      this.handleClick = this
        .handleClick
        .bind(this);
  }

  static defaultProps = {
    type: 'default',
    markAsRead: () => {},
  }

  static propTypes = {
    __html: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
  }

  handleClick (){
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, value, __html} = this.props
    const itemStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;
    return (
      <>
        
        {type && value && <li data-notification-type={type} className={css(itemStyle)} onClick={this.handleClick}>{value}</li>}
       {__html && <li data-urgent onClick={this.handleClick} className={css(styles.urgentItem)} dangerouslySetInnerHTML={{ __html: __html }}></li>}
      </>
    )
  }
}

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    cursor: 'pointer'
  },
  urgentItem: {
    color: 'red',
    cursor: 'pointer'
  },
});