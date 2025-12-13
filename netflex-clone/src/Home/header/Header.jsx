import React from 'react'
import './Header.css'
import  netflix  from '../../Assets/image.png';
import searchIcon from '../../Assets/image copy.png'
import notification from '../../Assets/notficatin-icon copy.png'
const Header = () => {
  return (
    <div className="header-page">
      <div className="un-ordered">
        <div className="logo-image-netflix">
          <img src={netflix} alt="netflex-logo" className="netflix-logo" />
        </div>
        <ul className="un-ordered-list">
          <li className="header-home-pages">Home</li>
          <li className="header-home-shows">TV Shows</li>
          <li className="header-home-moveis">Movies</li>
          <li className="header-home-latest">Latest</li>
          <li className="header-home-My-latest">My Latest</li>
          <li className="header-home-Brouser">Brouser By Languge</li>
        </ul>
      </div>

      <div>
        <li className="search-icon">
          <img src={searchIcon} alt="search-icon" />
        </li>
        <li className="notification-icon">
          <img src={notification} alt="" />
        </li>
        <li className="liked-icon"></li>
      </div>
    </div>
  );
}

export default Header