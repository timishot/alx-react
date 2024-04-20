import React, { PureComponent } from 'react'
import "./Notifications.css";
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
    return (
      <>
        
        {type && value && <li data-notification-type={type} onClick={this.handleClick}>{value}</li>}
       {__html && <li data-urgent onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: __html }}></li>}
      </>
    )
  }
}
