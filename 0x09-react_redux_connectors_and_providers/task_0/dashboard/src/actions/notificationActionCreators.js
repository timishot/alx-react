import { DEFAULT, URGENT } from './notificationActionTypes';

export const markAsRead = (index) => {
  return {
    type: DEFAULT,
    index,
  };
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
  return {
    type: URGENT,
    filter,
  };
};

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));