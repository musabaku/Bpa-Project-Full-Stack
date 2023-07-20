import React, { Fragment } from 'react';
import './Home.css';
import TCshort from './TCshort';
import TopProperty from './TopProperty';
import CountStats from './CountStats';
import AboutShort from './AboutShort';
import RecentBlog from './RecentBlog.jsx';
import turkish from '../../../images/turkciti.JPG';

const Home = () => {
  return (
    <Fragment>
      <div>
      <div className="main-box">
        <div className="header-text1">
          <h1>Welcome to Big Property Agency</h1>
          <p>Discover a World of Amazing Products</p>
          <a href="/products" className="explore-button">
            Explore Now
          </a>
        </div>
        

        <div className="header-image1">
          <img src={turkish} alt="Logo" />
        </div>
      </div>
      </div>


      <TopProperty />
      <TCshort />

      <AboutShort />
      <CountStats />
      <RecentBlog />
    </Fragment>
  );
};

export default Home;
