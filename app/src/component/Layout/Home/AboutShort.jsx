import React, { Fragment } from 'react';
import './AboutShort.css';
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
            throughout the sales process. Trust Big Property Agency for a
            reliable and rewarding real estate experience, with the best prices
            and minimized risks. Choose us as your trusted partner in achieving
            your real estate goals.
          </p>
        </div>
        <div class="box-container">
          <img src="logo.png" alt="Logo" class="logo" />
          <div class="content">
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutShort;
