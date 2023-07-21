import React, { Fragment } from 'react';
import './Home.css';
import TCshort from './TCshort';
// import TopProperty from './TopProperty';
import CountStats from './CountStats';
import AboutShort from './AboutShort';
// import RecentBlog from './RecentBlog.jsx';
import BlogCard from './BlogCard.jsx';

import PropertyCard from './PropertyCard.jsx';

import turkish from '../../../images/turkciti.JPG';
import big1 from "../../../images/Popular/big1.jpg"
import big2 from "../../../images/Popular/big2.jpg"
import big3 from "../../../images/Popular/big3.jpg"
import big4 from "../../../images/Popular/big4.jpg"
import big5 from "../../../images/Popular/big5.jpg"
import big6 from "../../../images/Popular/big6.jpeg"
import big7 from "../../../images/Popular/big7.jpg"
import big8 from "../../../images/Popular/big8.jpg"

const data = [
  {
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
    title: 'Top Cities for Profitable Real Estate Investment in Turkey',
  },
  {
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
    title: 'Exploring Turkey’s Booming Real Estate Market',
  },
  {
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
    title: 'Impact of Changing Mortgage Interest Rates on Turkey’s Property Market',
  },
  {
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
    title: 'Notaries Take the Lead: A New Era in Real Estate Transactions',
  },

  // Add more data objects as needed
];
const obj = {
  src: [big1, big2, big3, big4, big5, big6,big7,big8],
  name: [
    "BIG 101 - Luxury Apartments For Sale With Amazing Sea View",
    "BIG 102 - Spacious Family Home in a Prime Location",
    "BIG 103 - Modern Condo with Top-notch Amenities",
    "BIG 104 - Stylish Urban Loft with Panoramic Views",
    "BIG 105 - Elegant Villa with Private Pool and Garden",
    "BIG 106 - Contemporary Penthouse with Skyline Views",
    "BIG 107 - Prestige Flats with Bosphorus Lake Views",
    "BIG 108 - Huge Penthouse with City Skyline Views",


  ],
  location: [
    "Avcilar, Istanbul",
    "Kadikoy, Istanbul",
    "Besiktas, Istanbul",
    "Sisli, Istanbul",
    "Beyoglu, Istanbul",
    "Uskudar, Istanbul",
    "Beylikduzu, Istanbul",
    "Kartal, Istanbul",

  ],
  price: ["$250,000", "$300,000", "$350,000", "$400,000", "$550,000", "$650,000","$290,000","$590,000"],
  beds: [4, 3, 2, 5, 3, 4,3],
  area: [200, 180, 150, 300, 250, 220,300],
  baths: [3, 2, 2, 4, 2, 3,2],
};

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

      <h1 className="h1-popular">Popular Properties</h1>

      <PropertyCard obj={obj} />
      <TCshort />

      <AboutShort />
      <CountStats />
      <BlogCard data={data} />
    </Fragment>
  );
};

export default Home;
