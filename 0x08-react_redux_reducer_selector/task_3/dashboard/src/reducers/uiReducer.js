import * as uiActions from '../actions/uiActionsTypes';
import { map } from 'immutable';

export const initialState = map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
})

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case uiActions.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case uiActions.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case uiActions.LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);

        case uiActions.LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);

        case uiActions.LOGOUT:
            return state.set('isUserLoggedIn', false);
        
        default:
            return state;
    }
}