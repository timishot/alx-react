import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe('when isLoggedIn is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not include Login component', () => {
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('includes CourseList component', () => {
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });
});

describe('App Component', () => {
  test('calls logOut function on key combination', () => {
    const mockLogOut = jest.fn();
    const wrapper = mount(<App logOut={mockLogOut} />);
    // Simulate key down event on document
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);
    // Check if logOut function was called and alert was shown
    expect(mockLogOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    // Clean up after the test
    wrapper.unmount();
  });
});