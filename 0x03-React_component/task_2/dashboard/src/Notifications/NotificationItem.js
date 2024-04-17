import React from 'react'
import "./Notifications.css";

const handleOnclick = () => {
  
}

export default function NotificationItem({ type, html, value }) {
  return (
    <>
      {type && value && <li data-notification-type={type}>{value}</li>}
      {html && <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>}
    </>
  )
}
