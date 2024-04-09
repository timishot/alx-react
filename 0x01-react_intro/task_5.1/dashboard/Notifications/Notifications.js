import React from "react";
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';

export function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked')
    };

    return (
        <div className="Notifications">
            <button 
                style={{
                    color: '#3a3a3a',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    background: 'none',
                    border: 'none',
                    position: 'absolute', 
                    right: '3px',
                    top: '3px',
                    cursor: 'pointer',
                    outline: 'none',
                    width: '10px',
                    height: '10px',
                }}
                aria-label="Close"
                onClick={{handleClick}}
                >
                <img src={closeIcon} alt="Close"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
            
        </div>
    );
};

export default Notifications;