import { DEFAULT, URGENT } from './notificationActionTypes';

export const markAsRead = (index) => {
  return {
    type: DEFAULT,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: URGENT,
    filter,
  };
};