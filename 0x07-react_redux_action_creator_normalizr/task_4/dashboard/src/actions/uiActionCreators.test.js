import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('uiActionCreators', () => {
    it('login', () => {
        const user = { email: 'user.email', password: 'user.password' };
        const userData = { type: LOGIN, user };
        const result = login('user.email, user.password');
    
        expect(result).toEqual(userData);
    });
    
    it('logout', () => {
        const userData = { type: LOGOUT };
        const result = logout();
    
        expect(result).toEqual(userData);
    });

    it('displayNotificationDrawer', () => {
        const userData = { type: DISPLAY_NOTIFICATION_DRAWER };
        const result = displayNotificationDrawer();
    
        expect(result).toEqual(userData);
    });

    it('hideNotificationDrawer', () => {
        const userData = { type: HIDE_NOTIFICATION_DRAWER };
        const result = hideNotificationDrawer();
    
        expect(result).toEqual(userData);
    });
});
