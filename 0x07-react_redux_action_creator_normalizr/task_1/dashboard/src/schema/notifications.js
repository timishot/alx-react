import * as notificationsData from '../../notifications.json';
import { schema, normalize} from 'normalizr';

const getAllNotificationsByUser = (UserID) => {
    return notificationsData.default
        .filter((notification) => notification.author.id === UserID)
        .map((notification) => notification.context);
};
export default getAllNotificationsByUser

const user = new schema.Entity("users");

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
