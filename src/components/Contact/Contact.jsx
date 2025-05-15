import React from 'react'
import './Contact.css'
import contact_img from '../../assets/contact.jpg'
import contact_icon from '../../assets/mail.png'
import submit_icon from '../../assets/check.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a9c83e1f-5456-4d37-972e-989eb5ebd1fb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3><img src={contact_icon} alt="contact" />Join our Mailing List</h3>
            <p>If you are interested in playing water polo, feel free
                to fill out the contact form and you'll be able to receive
                info on upcoming practices, tournaments, and socials.
                Hope to see you there!
            </p>
            <ul>
                <li>cmumenswaterpolo@gmail.com</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Your andrewid</label>
                <input type="text" name='id' placeholder='Enter your andrewid' required/>
                <label>Your email</label>
                <input type="text" name='email' placeholder='Enter your email' required/>
                <label>Write anything here (Optional)</label>
                <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit<img src={submit_icon} alt="submit" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact