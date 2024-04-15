import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import PropTypes from "prop-types";
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

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications key = {listNotifications.id} listNotifications = {listNotifications} />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList listCourses = {listCourses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;