import React from 'react';
import './Explore.css'; 

import logo1 from '../../assets/logo1.jpeg'; // Replace with actual paths to your logos
import logo2 from '../../assets/logo2.jpeg';
import logo3 from '../../assets/logo3.jpeg';
import logo4 from '../../assets/logo4.jpeg';
import logo5 from '../../assets/logo7.jpeg';
import logo6 from '../../assets/logo6.jpeg';

const logos = [
  { src: logo1, url: 'http://localhost:3001' }, // Replace with your local URLs
  { src: logo2, url: 'http://localhost:3002' },
  { src: logo3, url: 'http://localhost:3003' },
  { src: logo4, url: 'http://helpinghandsrguktn.org/?i=1' },
  { src: logo5, url: 'https://cdpc.rguktn.ac.in/cdpc/' },
  { src: logo6, url: 'http://localhost:3006' }
];

const Explore = () => {
  const handleLogoClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='explore' name="explore">
    <div className="logo-container">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={`Logo ${index + 1}`}
          className="logo"
          onClick={() => handleLogoClick(logo.url)}
        />
      ))}
    </div>
    </div>
  );
};

export default Explore;
