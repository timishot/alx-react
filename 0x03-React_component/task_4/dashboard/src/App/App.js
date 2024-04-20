import React, { Component } from 'react'
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import PropTypes, { bool } from "prop-types";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, __html: getLatestNotification(), type: "urgent" }
];


export default class App extends Component {
  static defaultProps ={
    isLoggedIn: true,
    logOut: () => {},
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if(event.ctrlKey && event.key === 'h'){
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
             <Notifications key = {listNotifications.id} listNotifications = {listNotifications} />
             <div className="App">
               <Header />
               {isLoggedIn ? <BodySectionWithMarginBottom title="Course list"> <CourseList listCourses = {listCourses} /> </BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title="Log in to continue"> <Login  /> </BodySectionWithMarginBottom>}
               <BodySection title="News from the School">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis at tempora odio, necessitatibus repudiandae
                    reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
                    ipsa iste vero dolor voluptates.
                  </p> 
              </BodySection>
               <Footer />
             </div>
      </React.Fragment>
    )
  }
}