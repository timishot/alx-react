import React, { Component } from 'react'
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import PropTypes, { bool } from "prop-types";
import CourseList from "../CourseList/CourseList";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
];


export default class App extends Component {
  static defaultProps ={
    isLoggedIn: true,
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
             <Notifications key = {listNotifications.id} listNotifications = {listNotifications} />
             <div className="App">
               <Header />
               {isLoggedIn ? <CourseList listCourses = {listCourses} /> : <Login />}
               <Footer />
             </div>
      </React.Fragment>
    )
  }
}