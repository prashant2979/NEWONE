import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const MENU_ITEMS = ['home', 'about', 'skill',  'contact'];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setMenuOpen(false); // close menu on mobile after click
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Hamburger / close icons */}
      {!menuOpen ? (
        <img
          src={menu_open}
          alt="Open menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
      ) : (
        <img
          src={menu_close}
          alt="Close menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
      )}

      {/* Navigation menu */}
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {MENU_ITEMS.map(item => (
          <li key={item} className={activeMenu === item ? 'active' : ''}>
            <AnchorLink
              href={`#${item}`}
              offset={50}
              className="nav-link"
              onClick={() => handleMenuClick(item)}
            >
              {item.toUpperCase()}
            </AnchorLink>
            {activeMenu === item && (
              <img src={underline} alt={`${item} underline`} className="nav-underline" />
            )}
          </li>
        ))}
      </ul>

      <AnchorLink href="#contact" offset={50}>
        <div className="nav-connect">CONNECT TO ME</div>
      </AnchorLink>
    </nav>
  );
}

export default Navbar;
