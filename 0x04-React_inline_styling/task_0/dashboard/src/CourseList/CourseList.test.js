import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);

    const rows = wrapper.find('CourseListRow');
    expect(rows.at(0).prop('isHeader')).toBe(true);
    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');

    expect(rows.at(1).prop('isHeader')).toBe(true);
    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(1).prop('textSecondCell')).toBe('Credit');

    expect(rows.at(2).prop('isHeader')).toBe(false);
    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(2).prop('textSecondCell')).toBe('60');

    expect(rows.at(3).prop('isHeader')).toBe(false);
    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(3).prop('textSecondCell')).toBe('20');

    expect(rows.at(4).prop('isHeader')).toBe(false);
    expect(rows.at(4).prop('textFirstCell')).toBe('React');
    expect(rows.at(4).prop('textSecondCell')).toBe('40');
  });
  it('renders correctly when listCourses is empty or not passed', () => {
    const wrapperEmpty = shallow(<CourseList listCourses={[]} />);
    const wrapperNotPassed = shallow(<CourseList />);
    expect(wrapperEmpty.find(CourseListRow).length).toBe(1); // Header row
    expect(wrapperEmpty.find(CourseListRow).text()).toContain('No course available yet');
    expect(wrapperNotPassed.find(CourseListRow).length).toBe(1); // Header row
    expect(wrapperNotPassed.find(CourseListRow).text()).toContain('No course available yet');
  });

  it('renders list of courses correctly', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(courses.length + 1); // Header row + data rows
  });
});
