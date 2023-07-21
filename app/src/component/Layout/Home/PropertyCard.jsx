import React,{Fragment} from 'react'


import "./PropertyCard.css"
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BiArea } from 'react-icons/bi';


const PropertyDetails = ({obj}) => {
  
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
