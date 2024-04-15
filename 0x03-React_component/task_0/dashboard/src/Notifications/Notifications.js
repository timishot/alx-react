import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";


function Notifications({ listNotifications }) {
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };
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
              onClick={handleCloseClick}
            >
              <img src={closeIcon} alt="closeIcon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map(({ id, __html, type, value }) => (
              <NotificationItem key={id} __html={__html} type={type} value={value} />
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
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications:  [],
};

export default Notifications;