import React from 'react';
import "./About.css";
import about_img from '../../assets/img5.jpg';

const About = () => {
  return (
    <div className='about' name='aboutus'> 
        <div className='about-left'>
            <img src={about_img} alt=" " className='about_img'/>
            

        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <p>Rajiv Gandhi University of Knowledge Technologies (RGUKT) is an educational 
                institution in India that focuses on providing quality education in the fields 
                of science and technology. </p>
                <p>And this University not only prioritize education but also actively foster 
                comprehensive student development by promoting engagement with diverse organizations. 
                Emphasizing both education and skill-building, they offer opportunities for extracurricular
                 involvement, partnerships with industry, skill development programs, and community engagement
                  initiatives, preparing students for success in various facets of life.
                </p>
            
        </div>

      
    </div>
  )
}

export default About
