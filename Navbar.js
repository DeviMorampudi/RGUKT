import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/img4.png";
import menu from "../../assets/menu.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <img src={logo} alt="Logo" className='mainlogo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="aboutus" smooth={true} offset={-280} duration={500}>About us</Link></li>
        <li><Link to="explore" smooth={true} offset={-200} duration={500}>Explore</Link></li>
        <li><Link to="testimonial" smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
        <li><Link to="contactus" smooth={true} offset={-235} duration={500}>Contact</Link></li>
        <li><Link to="post" smooth={true} offset={-195} duration={500}>Posts</Link></li>
      </ul>
      <img src={menu} alt="Menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;