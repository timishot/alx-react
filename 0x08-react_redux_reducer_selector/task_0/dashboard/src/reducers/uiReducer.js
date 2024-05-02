import * as uiActions from '../actions/uiActionsTypes';

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case uiActions.DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true
            };

        case uiActions.HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false
            };

        case uiActions.LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            };

        case uiActions.LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false
            };

        case uiActions.LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false
            };
        
        default:
            return state;
    }
}