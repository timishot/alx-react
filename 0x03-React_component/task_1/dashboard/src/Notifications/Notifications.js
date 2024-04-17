import React, { Component } from 'react'
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";


export default class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.markAsRead = this.markAsRead.bind(this);
  }
  static defaultProps = {
    displayDrawer: false,
    listNotifications:  [],
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  }

  handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  markAsRead = (id) =>{
    console.log(`Notification ${id} has been marked as read`)
  };

  render() {
    const { listNotifications } = this.props;
    return (
      <React.Fragment>
      {listNotifications.length > 0 ? (
        <div className="flex-area">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          <div className="Notifications">
            <button
              style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
              aria-label="Close"
              onClick={this.handleCloseClick}
            >
              <img src={closeIcon} alt="closeIcon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map(({ id, __html, type, value }) => (
              <NotificationItem key={id} __html={__html} type={type} value={value} markAsRead={this.markAsRead.bind(this, id)} />
            ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>No new notification for now</p>
        </div>
      )}
    </React.Fragment>
    )
  }
}