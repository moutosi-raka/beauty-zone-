import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-4.png";
import { FaMobileAlt , FaMapMarkerAlt} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer px-5 md:px-16 py-10 pink-gradient text-base-content text-base">
      <div>
        <Link to="/">
          <img className="w-32 md:w-48" src={logo} alt="" />
        </Link>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Body Treatment</Link>
        <Link className="link link-hover">Cosmetics</Link>
        <Link className="link link-hover">Massages</Link>
        <Link className="link link-hover">Skin Care</Link>
        <Link className="link link-hover">Make Up</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Shop</Link>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <div  className="flex items-center">
            <FaMapMarkerAlt className="text-3xl"></FaMapMarkerAlt>
          <div className="ml-3">
            <p className="link link-hover font-bold">Address</p>
            <p>
              <small>Aftaf Nogor, Dhaka</small>
            </p>
          </div>
        </div>

        <div className="flex items-center">
            <FaMobileAlt className="text-3xl"></FaMobileAlt>
          <div  className="ml-3">
            <p className="link link-hover font-bold">Phone</p>
            <p className="mt-0 p-0">
              <small>0181800000</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;