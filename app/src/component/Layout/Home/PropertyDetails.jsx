import React,{Fragment} from 'react'
import big1 from "../../../images/Popular/big1.jpg"
import big2 from "../../../images/Popular/big2.jpg"
import big3 from "../../../images/Popular/big3.jpg"
import big4 from "../../../images/Popular/big4.jpg"
import big5 from "../../../images/Popular/big5.jpg"
import big6 from "../../../images/Popular/big6.jpeg"
import big7 from "../../../images/Popular/big7.jpg"
import big8 from "../../../images/Popular/big8.jpg"

import "./PropertyDetails.css"
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BiArea } from 'react-icons/bi';


const PropertyDetails = () => {
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

  return (
    <Fragment>
      <div className="big-container">
      {obj.src.map((src, index) => (
        <div className="popular-property" key={index}>
          <img src={src} alt={index} />
          <div className="property-details">
            <h3>{obj.name[index]}</h3>
            <span>{obj.price[index]}</span>
            <p>{obj.location[index]}</p>
            <div className="property-features">
              <div className="property-feature">
                <div className="icon-text">
                  <FaBed className="icon" />
                  <span>{obj.beds[index]}</span>
                </div>
                <span className="feature-label">Beds</span>
              </div>
              <div className="property-feature">
                <div className="icon-text">
                  <FaBath className="icon" />
                  <span>{obj.baths[index]}</span>
                </div>
                <span className="feature-label">Baths</span>
              </div>
              <div className="property-feature">
                <div className="icon-text">
                  <BiArea className="icon" />
                  <span>{obj.area[index]} m²</span>
                </div>
                <span className="feature-label">Area</span>
              </div>
            </div>
          </div>
        </div>
        
      ))}
        </div>

    </Fragment>
  );
};

export default PropertyDetails;
