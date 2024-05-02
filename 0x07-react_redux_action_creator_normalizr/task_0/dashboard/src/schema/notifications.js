import * as notificationsData from '../../notifications.json'

const getAllNotificationsByUser = (UserID) => {
    return notificationsData.default
        .filter((notification) => notification.author.id === UserID)
        .map((notification) => notification.context);
};
export default getAllNotificationsByUser