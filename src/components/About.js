import React, { Component } from 'react';
import './About.css';
import image from '../media/image2.JPG';

class About extends Component {
    render(){
        return (
            <div>
                <div className="page-header">
                    <h1 className="header-text">ABOUT ME</h1>
                </div>
                <div className="about">
                    <div className="about-container">
                        <img src={image} alt="Sam Alty" className="profile-img" data-aos="fade-up"></img>
                        <div className="text-container" data-aos="fade-up">
                            <p className="grey">I am a dynamic software developer with demonstrable experience devising responsive, 
                                engaging and user-friendly applications. Though I have experience with back-end technologies, my 
                                passion for aesthetics and devising a quality user-experience means I’m more front-end focused.</p>
                            <p className="grey">I began learning how to code in 2017 and graduated Code Institute’s Full Stack Software 
                                Development Diploma the following year with first degree honours. The course exposed me to a wide range 
                                of languages and frameworks that I incorporated into a number of applications developed over the duration 
                                of my studies.</p>
                            <p className="grey">Since then, I have undertaken a number of freelance projects for small businesses and 
                                seed-stage startups spanning a range of languages and frameworks. With five years’ experience as a 
                                copywriter, I have occasionally incorporated my background into my work as a developer, providing an 
                                all-embracing service to clients, helping them realise their project goals from conception through to 
                                the end product. Some of this work can be found in my portfolio below.</p>
                            <p className="grey">In addition to my work, I am always looking to broaden my understanding of new 
                                technologies through tutorials and personal projects. I built this site to market myself and showcase my 
                                work to date. Take a look, and if you like what you see, feel free to get in touch.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;