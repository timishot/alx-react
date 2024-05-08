import React, { Component } from 'react'
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PropTypes, { bool } from "prop-types";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite'
import { AppContext, defaultUser, defaultLogout } from './AppContext';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
      listNotifications : [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, __html: getLatestNotification(), type: "urgent" }
      ],
    }
  }
  static defaultProps ={
    isLoggedIn: true,
    logOut: () => {},
  }

  handleDisplayDrawer = ()=> {
    this.setState({
      displayDrawer: true
    })
  }

  handleHideDrawer = ()=> {
    this.setState({
      displayDrawer: false
    })
  }

  markNotificationRead = (id)=> {
    const updatedNotifications = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: updatedNotifications });
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

  logIn = (email, password) => {
    const updateUser = {
      email,
      password,
      isLoggedIn: true,
    };
    this.setState({user: updateUser});
  }

  logOut = () => {
    this.setState({user: defaultUser})
  }

  render() {
    const { user, listNotifications } = this.state;
    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <React.Fragment>
             <div className={css(styles.body)}>
              <Notifications key = {listNotifications.id} listNotifications = {listNotifications} markNotificationAsRead={this.markNotificationAsRead} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
              <div className="App">
                <Header />
                {user.isLoggedIn ? <BodySectionWithMarginBottom title="Course list"> <CourseList listCourses = {listCourses} /> </BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title="Log in to continue"> <Login  logIn={this.logIn} /> </BodySectionWithMarginBottom>}
                <BodySection title="News from the School">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis at tempora odio, necessitatibus repudiandae
                      reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
                      ipsa iste vero dolor voluptates.
                    </p> 
                </BodySection>
                <div className={css(styles.footer)}>
                  <Footer />
                </div>
              </div>
             </div>
      </React.Fragment>
      </AppContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    margin: '0',
    padding: '0',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    color: '#888',
  },
});