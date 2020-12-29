import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import withReactContent from 'sweetalert2-react-content'
import { useForm } from 'react-hook-form'
import * as emailjs from "emailjs-com";
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Thank you for sending us your thoughts!',
        text: 'We are always looking for ways to make our service even better. xoxo Sushi Junai',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const INITIAL_STATE = {
    email: "",
    message: ""
};

const FeedbackForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        // e.preventDefault();
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }


    const onSubmit = async e => {
        try {
            const { email, message } = contact;
            const payload = { email, message };
            console.log(payload)
            console.log(contact)

            const SERVICE_ID = "service_1nivyx7";
            const TEMPLATE_ID = "template_otahx4r";
            const USER_ID = "user_ZQSDdDgoptUzuy6jwSMHv";

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID)
            .then(function(response) {
                console.log(response.status, response.text);
                setContact(INITIAL_STATE);
                alertContent();
                }, function(err) {
                    console.log('FAILED...', err);
                })
        } catch (error) {
            console.log(error)
        }
    };

        return (
            <div id="contact" className="contact-area three border-bottom-two pt-100 pb-70">
                <div className="container">
                    <div className="form-title">
                        <h2>Leave us a feedback!</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-6">
                            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-field">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        value={contact.email}
                                        onChange={handleChange}
                                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.email && 'Email is required.'}
                                    </div>
                                </div>
                            
                                <div className="form-field">
                                    <textarea 
                                        name="message" 
                                        className="form-control" 
                                        cols="30" 
                                        rows="6" 
                                        placeholder="Write me something, anything" 
                                        value={contact.message}
                                        onChange={handleChange}
                                    />
                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.message && 'Text body is required.'}
                                    </div>
                                </div>
                                    
                                <button type="submit" className="btn common-btn three">Send <span></span></button>
                            </form>
                        </div>

                        <div className="col-md-5 col-lg-6">
                            <div className="form-field">
                                <div className="top">
                                    <span>Sushi Junai 1</span>
                                    <ul>
                                        <li>
                                            <span>Phone:</span>
                                            <a href="tel:+19792195702"></a>
                                        </li>
                                        <li>
                                            <span>Address:</span>
                                            <a href="#" target="_blank"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="top">
                                    <span>Sushi Junai 2</span>
                                    <ul>
                                        <li>
                                            <span>Phone:</span>
                                            <a href="tel:+19792195702"></a>
                                        </li>
                                        <li>
                                            <span>Address:</span>
                                            <a href="#" target="_blank"></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bottom">
                                    <ul>
                                        <li>
                                            <a target="_blank">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default FeedbackForm