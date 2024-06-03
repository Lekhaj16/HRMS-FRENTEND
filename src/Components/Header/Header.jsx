import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/hrmslogo.png';
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaCaretDown } from 'react-icons/fa';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="HRMS Logo" className="logo" />
        <h1>HRMS</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="profile" onClick={toggleDropdown} ref={dropdownRef} aria-expanded={dropdownOpen} aria-haspopup="true">
          <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
          <span className="profile-name">J. Madhu Vamsi <FaCaretDown /></span>
          {dropdownOpen && (
            <ProfileDropdown />
          )}
        </div>
      </div>
    </header>
  );
};

const ProfileDropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <img src="https://via.placeholder.com/40" alt="Profile" className="dropdown-pic" />
        <div className="dropdown-info">
          <h4>Madhu Vamsi</h4>
          <p>Web Designer</p>
        </div>
      </div>
      <Link to="/profile"><FaUser /> My Profile</Link>  
      <Link to="/settings"><FaCog /> Account Settings</Link>
      <Link to="/help"><FaQuestionCircle /> Need Help?</Link>
      <Link to="/logout"><FaSignOutAlt /> Sign Out</Link>
    </div>
  );
};

export default Header;
