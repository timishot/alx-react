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

describe('loginRequest', () => {
    it('should dispatch LOGIN and LOGIN_SUCCESS actions on successful API response', async () => {
        // Mock the API response
        const mockResponse = { success: true };
        jest.spyOn(api, 'loginRequest').mockResolvedValue(mockResponse);

        // Dispatch the action
        const dispatch = jest.fn();
        await (async () => {
            await loginRequest('user.email', 'user.password')(dispatch);

            // Verify the dispatched actions
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN });
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN_SUCCESS });
        })();
    });

    it('should dispatch LOGIN and LOGIN_FAILURE actions on API query failure', async () => {
        // Mock the API response
        const mockError = new Error('API query failed');
        jest.spyOn(api, 'loginRequest').mockRejectedValue(mockError);

        // Dispatch the action
        const dispatch = jest.fn();
        await (async () => {
            await loginRequest('user.email', 'user.password')(dispatch);

            // Verify the dispatched actions
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN });
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN_FAILURE });
        })();
    });
});
