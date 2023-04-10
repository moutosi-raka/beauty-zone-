import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-4.png";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = ()=>
  {
    logOut()
    .then(()=>{})
    .catch(e => console.error(e));
  }
    const menuItems = (
        <>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link> 
          </li>
          {
            user?.uid ?
            <>
            <li><Link to='/my-review'>My Review</Link></li>
            <li><Link to='/add-services'>Add Service</Link></li>
            </>
            : <></>
          }
        </>
    );
    return (
        <div className="navbar pink-gradient px-5 md:px-16 py-3 header-position">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              
            </ul>
          </div>
          <Link to="/">
            <img className="w-48" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {
            user?.uid 
            ? <button onClick={handleLogout} className="btn btn-outline btn-secondary">Log Out</button>
            : 
            <Link  to='/login'><button className="btn btn-xs md:btn-sm btn-outline btn-secondary">Login</button></Link>
          }
          
        </div>
      </div>
    );
};

export default Header;