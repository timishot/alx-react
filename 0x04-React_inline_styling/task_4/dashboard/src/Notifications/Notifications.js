import React, { Component } from 'react'
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from 'aphrodite'


export default class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDrawer: false, // Set initial state to true to display notifications
    };
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
    this.setState((prevState) => {
      const newState = {
        isDrawer: !prevState.isDrawer, // Toggle isDrawer between true and false
      };
  
      // Check if .point element exists in the DOM
      const notifiCation = document.querySelector("#point");
      if (notifiCation) {
        // Conditionally hide the notification menu item
        if (prevState.isDrawer === true) {
          notifiCation.style.display = 'none';
        } else {
          notifiCation.style.display = 'flex'; // or 'block' depending on its default display style
        }
      }
  
      return newState;
    });
  };
  

  markAsRead = (id) =>{
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { listNotifications } = this.props;
    return (
      <React.Fragment>
      {listNotifications.length > 0 ? (
        <div className={css(styles.flexArea)}>
          <div className={css(styles.menuItem)}>
            <p onClick={this.handleCloseClick} id='point' className={css(styles.point)}>Your notifications</p>
          </div>
          { this.state.isDrawer && (<div style={{ position: 'relative' }} className={css(styles.Notifications)}>
            <button
              style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer", }}
              aria-label="Close"
              onClick={this.handleCloseClick}
            >
              <img src={closeIcon} alt="closeIcon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul >
              {listNotifications.map(({ id, __html, type, value }) => (
              <NotificationItem key={id} id={id} __html={__html} type={type} value={value} markAsRead={this.markAsRead} />
            ))}
            </ul>
          </div>)}
        </div>
      ) : (
        <div className={css(styles.menuItem)}>
          <p>No new notification for now</p>
        </div>
      )}
    </React.Fragment>
    )
  }
}

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const opacityAnimation = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  Notifications: {
    padding: '1em',
    border: '2px dashed red',
    display: 'block',
    top: '10px',
    zIndex: '0',

  },
  point: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    animationName: [opacityAnimation, bounceAnimation],
    animationDuration: '1s, 0.5s',
    animationIterationCount: '3',
    animationTimingFunction: 'ease-in-out',
    ':hover': {
      animationPlayState: 'running',
    },
  },
})