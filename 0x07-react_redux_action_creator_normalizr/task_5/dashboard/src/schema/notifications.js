import * as notificationsData from '../../notifications.json';
import { schema, normalize} from 'normalizr';

const getAllNotificationsByUser = (UserID) => {
    const { entities, result } = normalizedData;
    const notifications = entities.notifications;
    const messages = entities.messages;
    const notificationsByUser = [];

    for (const notificationID in notifications) {
        if (notifications[notificationID].author === userId) {
            notificationsByUser.push(messages[notifications[notificationID].context]);
        }
    }

    return notificationsByUser;
};

const user= new schema.Entity("users");

const message = new schema.Entity(
    "messages", 
    {}, 
    { 
        idAttribute: "guid" 
    }
);

const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

export { normalizedData };
