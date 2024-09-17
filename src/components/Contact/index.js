import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timer);  // Proper cleanup
    }, []);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_00zvuxj', 'template_n6vvbo8', refForm.current, {
          publicKey: 'Q8r50qaSyXIy0J64L',
        })
        .then(
          () => {
            // console.log('SUCCESS!');
            alert('Message sent successfully!');
          },
          (error) => {
            // console.log('FAILED...', error.text);
            alert('Message failed to send!');
          },
        );
    };
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I'm excited to explore freelancing opportunities, particularly those involving ambitious or large-scale projects. If you have any other inquiries or requests, feel free to reach out using the form below—I’m always open to new challenges and collaborations!</p>
                    <div className='contact-form'>
                        <form ref = {refForm} onSubmit = {sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type = 'text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type = 'email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type = 'text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send Message' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div className='info-map'>
                Himanshu Saraswat,
                <br />
                India
                <br/>
                Room no. 501, BH3, IIIT Sri City <br/>
                Chittoor, Andhra Pradesh - 517646
                <br />
                <span>himanshusaraswat91@gmail.com</span> 
            </div>
            <div className='map-wrap'>
                <MapContainer center = {[13.5953, 79.4192]} zoom = {7} >
                    <TileLayer url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position = {[13.5953, 79.4192]}>
                        <Popup>
                            Himanshu is here!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact