import React, {useContext} from "react";
import logo from '../assets/holborton_logo.jpg';
import { StyleSheet, css } from 'aphrodite'
import { AppContext } from "../App/AppContext";


function Header() {
  const { user, logOut } = useContext(AppContext)
  return (
      <>
        <div className={css(styles.AppHeader)}>
          <img alt="logo" src={logo} className={css(styles.AppLogo)} />
          <h1>School dashboard</h1>
        </div>
        {
          user.isLoggedIn &&
          (<section id="logoutSection">
            <h2>Welcome <strong> {user.email} </strong> <em></em> </h2>
            <a href="#" onClick={logOut}>(logout)</a>
          </section>)
        }
      </>
  );
}


const styles = StyleSheet.create({
  AppHeader: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
    paddingTop: 0,
  },
  AppLogo: {
    width: '200px',
    height: '200px',
  },
});

export default Header;
