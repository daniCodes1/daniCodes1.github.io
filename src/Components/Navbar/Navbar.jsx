import {React, useState} from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from 'react-scroll';


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
  <nav className="navbar">
    <Link to="hero" smooth={true} offset={0} duration={500} className="brand" aria-label="Go to top">
      {/* <img src={computer} alt="" className="logo" /> */}

      {
      <span className="brand-text">Dani Ren</span>
      }
    </Link>

    <ul className={`nav-links ${mobileMenu ? "open" : ""}`}>
      <li><Link to="hero" smooth offset={0} duration={500} className="nav-link">Home</Link></li>
      <li><Link to="about" smooth offset={-150} duration={500} className="nav-link">About</Link></li>
      <li><Link to="experiences" smooth offset={-260} duration={500} className="nav-link">Experiences</Link></li>
      <li><Link to="project-container" smooth offset={-200} duration={500} className="nav-link">Projects</Link></li>
      <li><Link to="contact" smooth offset={-260} duration={500} className="nav-link">Contact</Link></li>
    </ul>

    <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
  </nav>
);

}

export default Navbar