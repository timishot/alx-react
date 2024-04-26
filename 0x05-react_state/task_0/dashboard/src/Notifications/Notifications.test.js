import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

import NotificationItem from './NotificationItem';

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });

  it('renders correctly when listNotifications is empty or not passed', () => {
    const wrapperEmpty = shallow(<Notifications listNotifications={[]} />);
    const wrapperNotPassed = shallow(<Notifications />);
    expect(wrapperEmpty.find('.menuItem').text()).toContain('No new notification for now');
    expect(wrapperNotPassed.find('.menuItem').text()).toContain('No new notification for now');
  });

  it('renders list of notifications correctly with the right number of NotificationItem components', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  });

  it('does not display "Here is the list of notifications" message when listNotifications is empty', () => {
    const wrapperEmpty = shallow(<Notifications listNotifications={[]} />);
    const wrapperNotEmpty = shallow(
      <Notifications listNotifications={[{ id: 1, type: 'default', value: 'Test notification' }]} />
    );
    expect(wrapperEmpty.find('.Notifications').text()).not.toContain('Here is the list of notifications');
    expect(wrapperNotEmpty.find('.Notifications').text()).toContain('Here is the list of notifications');
  });
});