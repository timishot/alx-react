import { courseReducer } from "./courseReducer";
import * as courseActions from '../actions/courseActionTypes';

describe('Testing courseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    const result = courseReducer();
    expect(result).toStrictEqual([]);
  });

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
      type: courseActions.FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20
        },
        {
          id: 3,
          name: "React",
          credit: 40
        }
      ]
    };
    const expected = [
      {
        id: 1,
        name: "ES6",
        "isSelected": false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        "isSelected": false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        "isSelected": false,
        credit: 40
      }
    ];
    const result = courseReducer(undefined, action);
    expect(result).toStrictEqual(expected);
  });

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const action = {
      type: courseActions.SELECT_COURSE,
      index: 1
    };
    const expected = [
      {
        id: 1,
        name: "ES6",
        "isSelected": true,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        "isSelected": false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        "isSelected": false,
        credit: 40
      }
    ];
    const state = [
      {
        id: 1,
        name: "ES6",
        "isSelected": false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        "isSelected": false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        "isSelected": false,
        credit: 40
      }
    ];

    const result = courseReducer(state, action);
    expect(result).toStrictEqual(expected);
  });

  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const action = {
      type: courseActions.UNSELECT_COURSE,
      index: 1
    };
    const expected = [
      {
        id: 1,
        name: "ES6",
        "isSelected": false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        "isSelected": false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        "isSelected": false,
        credit: 40
      }
    ];
    const state = [
      {
        id: 1,
        name: "ES6",
        "isSelected": true,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        "isSelected": false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        "isSelected": false,
        credit: 40
      }
    ];

    const result = courseReducer(state, action);
    expect(result).toStrictEqual(expected);
  });
});