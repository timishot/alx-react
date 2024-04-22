import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const cell = wrapper.find('th');
    expect(cell).toHaveLength(1);
    expect(cell.prop('colSpan')).toBe(2);
    expect(cell.text()).toBe('Header');
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
    );
    const cells = wrapper.find('th');
    expect(cells).toHaveLength(2);
    expect(cells.at(0).text()).toBe('Header 1');
    expect(cells.at(1).text()).toBe('Header 2');
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />
    );
    const cells = wrapper.find('td');
    expect(cells).toHaveLength(2);
    expect(cells.at(0).text()).toBe('Data 1');
    expect(cells.at(1).text()).toBe('Data 2');
  });
});
