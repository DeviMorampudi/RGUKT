import React from 'react';
import './contact.css';
import msg_icon from '../../assets/msg.png';
import email from '../../assets/email.png';
import call from '../../assets/call.png';
import location from '../../assets/location.png';


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "abfef103-782c-4e91-8cd4-5d49249149c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' name='contactus'>
        <div className='contact-col'>
            <h3>Send us Message<img src={msg_icon} alt="" /></h3>
            <p className="para">Feel free to reach out through contact form or find our contact information
                below.Your feedback , innovative ideas and suggestions are important to us. 
            </p>
            
                <p><img src={email} alt=" " />Contact Rgukt@gmail.com</p>
                <p><img src={call} alt=" " />+1 23 456 789</p>
                <p><img src={location} alt=" " />RGUKT-Nuzvid</p>
        
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}> 
            <label>ID</label>
            <input type="text" name="id" placeholder='Enter your id' required/>
            <label>Name</label>
            <input type="text" name="name" placeholder='Enter your Name' required/>
            <label>E-mail</label>
            <input type="text" name="email" placeholder='Enter your E-mail' required/>
            <label>Write your suggestions here</label>
            <textarea type="text" name="msg" rows="4" placeholder='Enter your message' required>
              </textarea>
              <button type='submit' className='button' >Submit</button>
          </form>
          <span>{result}</span>
            
            </div>
      
    </div>
  )
}

export default Contact;
