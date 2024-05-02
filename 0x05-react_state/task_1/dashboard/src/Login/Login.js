import React, { Component } from "react";
import logo from '../assets/holborton_logo.jpg';
import { StyleSheet, css } from 'aphrodite'
import  { getFullYear, getFooterCopy } from '../utils/utils'



export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    }
  }

  handleLoginSubmit = () =>{
    this.setState({
      isLoggedIn:true,
    })
  }

  handleChangeEmail = (event)=> {
    this.setState({
      email: event.target.value,
    })
  }

  handleChangePassword = (event)=> {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    return (
      <React.Fragment>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.formdoc)} onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.inp)} type="email" name="email" onChange={this.handleChangeEmail} ></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.inp)} type="password" name="password" onChange={this.handleChangePassword} ></input>
          <input type="submit" />
        </form>
      </div>
    </React.Fragment>
    )
  }
}


const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1rem',
    padding: '2em',
    borderBottom: '3px solid #e0354b',
    height: '45%',
    
  },

  inp: {
    margin: '10px',
    [screenSize.small]: {
      display: 'block',
      border: 'none',
      padding: '0',
    },
  },
  


})


