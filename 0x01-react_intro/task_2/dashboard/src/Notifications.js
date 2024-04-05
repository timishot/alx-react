import React from "react";
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils.js';

const Notifications = () => {
    const handleClick = () => {
        console.log('Close button has been clicked');
    };
    
    return (
        <div className="Notifications">
            <button 
                  style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        }}
                aria-label="Close"
                onClick={handleClick}
                >
                <img className="close" src={closeIcon} alt="Close"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications