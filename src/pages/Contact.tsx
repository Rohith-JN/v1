/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useRef } from 'react';
import '../styles/contact.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

AOS.init();

const Contact = () => {
  const form: any = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID : '',
        process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : '',
        form.current,
        process.env.REACT_APP_USER_ID ? process.env.REACT_APP_USER_ID : ''
      )
      .then(
        (result) => {
          NotificationManager.success(
            'Thank you for contacting me',
            'Message sent!'
          );
        },
        (error) => {
          NotificationManager.error(
            'Please try again later',
            'Message could not be sent!'
          );
        }
      );
    e.target.reset();
  };

  return (
    <div className="Contact" id="Contact">
      <h1 className="section-header">Contact</h1>
      <div className="main">
          <div className="contact-form">
            <form
              role="form"
              onSubmit={sendEmail}
              ref={form}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="900"
              data-aos-easing="ease"
              data-aos-mirror="false"
              data-aos-once="true"
            >
              <div className="row-1">
                <input
                  type="text"
                  autoComplete="off"
                  id="name"
                  name="name"
                  placeholder="Name"
                  spellCheck="false"
                  required
                ></input>

                <input
                  type="email"
                  autoComplete="off"
                  id="email"
                  name="email"
                  placeholder="Email"
                  spellCheck="false"
                  required
                ></input>
              </div>

              <input
                type="text"
                autoComplete="off"
                id="subject"
                name="subject"
                placeholder="Subject"
                spellCheck="false"
              ></input>
              <br></br>

              <textarea
                id="message"
                autoComplete="off"
                name="message"
                placeholder="Message"
                spellCheck="false"
              ></textarea>
              <br></br>
              <div className="form-button">
                <button type="submit" value="Submit" className="slide">
                  Send Message!
                </button>
              </div>
            </form>
          </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default Contact;
