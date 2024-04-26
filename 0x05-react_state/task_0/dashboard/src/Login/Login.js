import React from "react";
import logo from '../assets/holborton_logo.jpg';
import { StyleSheet, css } from 'aphrodite'
import  { getFullYear, getFooterCopy } from '../utils/utils'

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.formdoc)}>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.inp)} type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.inp)} type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
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

export default Login;
