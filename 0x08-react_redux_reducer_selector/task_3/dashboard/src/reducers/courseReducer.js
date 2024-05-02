import * as courseActions from '../actions/courseActions';

export function courseReducer(state = [], action) {
    switch (action.type) {
        case courseActions.FETCH_COURSE_SUCCESS:
            return action.data.map((item) => ({...item, isSelected: false}));

        case courseActions.SELECT_COURSE:
            return state.map((item) => item.id == action.index ? {...item, isSelected: true} : {...item});

        case courseActions.UNSELECT_COURSE:
            return state.map((item) => item.id == action.index ? {...item, isSelected: false} : {...item});

        default:
            return state;
    }
}