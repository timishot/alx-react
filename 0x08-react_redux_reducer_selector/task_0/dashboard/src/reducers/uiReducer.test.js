import { uiReducer, initialState } from './uiReducer';
import * as uiActions from '../actions/uiActionsTypes';

// Describe block for the uiReducer
describe('uiReducer', () => {
    // Test case for the initial state when no action is passed
    it('should return the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    // Test case for the initial state when the action SELECT_COURSE is passed
    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: uiActions.SELECT_COURSE });
        expect(state).toEqual(initialState);
    });

    // Test case for changing the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed
    it('should correctly change the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const state = uiReducer(undefined, { type: uiActions.DISPLAY_NOTIFICATION_DRAWER });
        expect(state.isNotificationDrawerVisible).toBe(true);
    });
});
