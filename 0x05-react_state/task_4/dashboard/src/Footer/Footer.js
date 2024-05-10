import React, {useContext} from "react";
import './Footer.css';
import  { getFullYear, getFooterCopy } from '../utils/utils'
import { AppContext } from "../App/AppContext";

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
      {user.isLoggedIn && (
        <div>
          <p>
            <a href="#">Contact Us</a>
          </p>
        </div>
      )}
    </>
  );
}

export default Footer;
