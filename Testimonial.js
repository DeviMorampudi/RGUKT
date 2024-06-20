import React, {useRef} from 'react';
import './Testimonial.css';
import post_icon from '../../assets/post.png';
import pre_icon from '../../assets/pre.png';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';

const Testimonial = () => {
    
    const slider = useRef();
    let tx=0;
   
    const slideForward = () =>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;

    }



  return (
    <div className='testimonials' name='testimonial'>
        <img src={pre_icon} alt=" " className='next-btn' onClick={slideForward}/>
        <img src={post_icon} alt=" " className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user1} alt="" />
                            <div>
                                <h3>N170456</h3>
                                <span>Helping Hands</span>
                            </div>
                        </div>
                        <p>Working as a volunteer in Helping Hands has been an incredibly 
                            fulfilling experience. Seeing the direct impact of our efforts on 
                            individuals and communities in need has been both humbling and 
                            inspiring. It's heartwarming to witness the positive change we can 
                            create together through our collective efforts and dedication.I am 
                            glad to take part in this.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user2} alt="" />
                            <div>
                                <h3>N160765</h3>
                                <span>Student Mithra</span>
                            </div>
                        </div>
                        <p>Volunteering with Student Mithra, which orchestrates events in colleges,
                         has been an enriching journey. Witnessing the enthusiasm and camaraderie 
                         among students as they engage in these events is truly gratifying. Being 
                         part of such initiatives not only fosters personal growth but also 
                         cultivates a sense of community and belonging.</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user3} alt="" />
                            <div>
                                <h3>N180960</h3>
                                <span>E Crush</span>
                            </div>
                        </div>
                        <p>Volunteering with E-Crush, which focuses on enhancing students' 
                            English skills, has been an incredibly rewarding experience. 
                            Witnessing the transformation in students as they gain confidence 
                            and proficiency in English is truly fulfilling. Contributing to 
                            their academic and personal development through language learning is
                            both inspiring and meaningful.</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user4} alt="" />
                            <div>
                                <h3>N181067</h3>
                                <span>Student Recreation Club</span>
                            </div>
                        </div>
                        <p>Being a volunteer for SRC and organizing movie screenings for 
                            students has been a delightful experience. It's fulfilling to see 
                            students come together, relax, and enjoy quality films. Providing 
                            this recreational activity fosters a sense of community and offers a
                             well-deserved break from academic rigor, contributing to a vibrant 
                             campus culture.</p>
                    </div>
                </li>

                

               
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonial;
