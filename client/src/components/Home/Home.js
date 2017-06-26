// blog/client/src/components/Home/Home.js

import React from 'react';
import {Link} from 'react-router';
import {} from '../../sharedStyles/styles.css'; // shared styles in src
import {homeContainer, homeimg, cardsContainer, latestVideosText,
        card, cardTitle, cardDescription} from './styles.css'; // the local one in this folder

const Home = (props) => (
    <div className={homeContainer}>
      <img className={homeimg} src="https://elearningindustry.com/wp-content/uploads/2014/09/3-Easy-Methods-to-Create-eLearning-Videos.jpg" alt="" />
      <div className={cardsContainer}>
        <p className={latestVideosText}>LATEST VIDEOS</p>
        {props.courses.slice(0, 3).map((item, index) => (
              <div className={card} key={index}>
                <p className={cardTitle}>{item.title}</p>
                <p className={cardDescription}>{item.description}</p>
                <Link className="btn btn-default" to={`/SingleCourseView/${item._id}`}>View</Link>
              </div>
        ))}
        </div>

    </div>
  )

export default Home;
