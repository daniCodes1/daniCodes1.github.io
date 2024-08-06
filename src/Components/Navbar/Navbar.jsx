import {React, useState} from 'react'
import './Navbar.css'
import computer from '../../assets/computer.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from 'react-scroll';


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className='container'>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={computer} alt="Image" className="logo" style={{ height: '50px' }} />
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='project-container' smooth={true} offset={-200} duration={500}>Projects</Link></li>
        <li><Link to='experiences' smooth={true} offset={-260} duration={500}>Experiences</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar