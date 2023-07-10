import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="box1">
          <p><MdEmail /> info@bigpropertyagency.com</p>
          <p><FaWhatsapp />  +90 532 255 23 65</p>
        </div>

        <div className="box2">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>

      <div className="container-header">
        <div className="header-image">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-text">
          <ul>
            <li className="header-item">Home</li>
            <li className="header-item">About</li>
            <li className="header-item">Services</li>
            <li className="header-item">Turkish Citizenship</li>
            <li className="header-item">Properties</li>
            <li className="header-item">Blog</li>
            <li className="header-item">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
