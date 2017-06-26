

import React from 'react';
import { Link } from 'react-router';
import {footerBox, endCredits, socialBox} from './styles.css'; // the local one in this folder


const Footer = () =>
  <nav className={footerBox}>
      <div className={endCredits}>
        <p>Thanks for visiting! You&#39;re awesome!</p>
      </div>

      <div className={socialBox}>
      <Link to="mailto:jenntress@gmail.com">
        <img title="Email" alt="Email" src="http://2015.dnidziedzictwa.pl/files/Rezerwacja-przez-formularz-300x300.jpg" width="35" height="35" />
      </Link>
      <Link to="https://www.linkedin.com/in/jenn-turner-67576211a/">
        <img title="LinkedIn" alt="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin1.png" width="35" height="35" />
      </Link>
        <Link to="https://twitter.com/jenntress">
          <img title="Twitter" alt="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter1.png" width="35" height="35" />
        </Link>
      </div>
  </nav>


  export default Footer;
