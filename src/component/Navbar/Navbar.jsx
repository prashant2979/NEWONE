import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

// keep IDs lowercase to match section ids
const MENU_ITEMS = ['home', 'about', 'skill', 'project', 'contact'];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setMenuOpen(false); // close menu on mobile after click
  };

  // Scroll spy effect to update activeMenu on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 80; // offset for navbar height
      let current = activeMenu;

      for (let i = MENU_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(MENU_ITEMS[i]);
        if (section && section.offsetTop <= scrollPos) {
          current = MENU_ITEMS[i];
          break;
        }
      }

      if (current !== activeMenu) {
        setActiveMenu(current);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMenu]);

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
              offset={70}
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

      <AnchorLink href="#contact" offset={70}>
        <div className="nav-connect">CONNECT TO ME</div>
      </AnchorLink>
    </nav>
  );
}

export default Navbar;
