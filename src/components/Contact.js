import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_tnsg71r', 'template_cpf06ub', e.target, 'user_uomwfavYtSWBwDW05rYm9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            alert("Thank you for your message. I will get back to as soon as possible.");
    }
    return (
        <div>
            <div className="page-header">
                <h1 className="header-text">CONTACT</h1>
            </div>
            <div className="contact">
                <div className="contact-container">
                    <p>Thanks for visiting.</p>
                    <p>For any enquiries, fill out the form below and I'll get back to you as soon as I can.</p>
                    <br></br>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <br></br>
                        <textarea name="message" placeholder="Your message here" />
                        <br></br>
                        <input type="submit" value="Send" />
                    </form>
                    <br></br>
                    <a href="https://github.com/samalty/" 
                       className="button" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       data-aos="fade-up">
                        <i class="fab fa-github" style={{ fontSize: '90px' }}></i>
                        <br></br>
                        <br></br>
                        Find me on Github
                    </a>
                    <a href="https://www.linkedin.com/in/sam-alty-software-developer/" 
                       className="button" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       data-aos="fade-up">
                        <i class="fab fa-linkedin" style={{ fontSize: '90px' }}></i>
                        <br></br>
                        <br></br>
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;