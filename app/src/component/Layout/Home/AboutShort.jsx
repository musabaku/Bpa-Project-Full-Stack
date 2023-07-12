import React, { Fragment } from 'react';
import './AboutShort.css';
import bestPrice from '../../../images/About/bestPrice.JPG';
const AboutShort = () => {
  return (
    <Fragment>
      <div className="about-container">
        <div className="about-heading">
          <h2> Why Choose Us? </h2>
        </div>
        <div className="about-text">
          <p>
          Big Property Agency is a trusted and experienced real estate company
            in Turkey, serving clients for over 12 years. With sales offices
            strategically located in Istanbul and a dedicated team fluent in
            multiple languages, we have successfully assisted 1900+ individuals
            in becoming homeowners. Our commitment to professionalism, customer
            satisfaction, and personalized service sets us apart. We prioritize
            building long-term relationships, offering support and guidance
            throughout the sales process.
          </p>
        </div>
        <div className="about-logo-box">
          <div className="box-container">
            <img src={bestPrice} alt="Logo" className="logo" />
            <div className="content">
              <h3>Extensive Product Selection</h3>
              <p className="text">
              Discover a wide variety of products across multiple categories for all your shopping needs.</p>
            </div>
          </div>
          <div className="box-container">
            <img src={bestPrice} alt="Logo" className="logo" />
            <div className="content">
              <h3>User-Friendly Experience</h3>

              <p className="text">
              Enjoy a seamless and intuitive shopping experience with our easy-to-use website.
              </p>
            </div>
          </div>
          <div className="box-container">
            <img src={bestPrice} alt="Logo" className="logo" />
            <div className="content">
              <h3>Quality Assurance</h3>

              <p className="text">
              Rest assured, our products meet the highest standards of quality and durability.
              </p>
            </div>
          </div>
          <div className="box-container">
            <img src={bestPrice} alt="Logo" className="logo" />
            <div className="content">
              <h3>Outstanding Customer Support</h3>

              <p className="text">
              Our friendly support team is always ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutShort;