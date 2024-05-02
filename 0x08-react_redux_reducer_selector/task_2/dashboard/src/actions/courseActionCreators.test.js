import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("courseActionCreators", () => {
    describe("selectCourse", () => {
        it("should create an action to select a course", () => {
            const index = 1;
            const expectedAction = { type: SELECT_COURSE, index };
            expect(selectCourse(index)).toEqual(expectedAction);
        });
    });

    describe("unselectCourse", () => {
        it("should create an action to unselect a course", () => {
            const index = 1;
            const expectedAction = { type: UNSELECT_COURSE, index };
            expect(unselectCourse(index)).toEqual(expectedAction);
        });
    });
});
