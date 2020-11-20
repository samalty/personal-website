import React, { Component } from 'react';
import './Skills.css';
import html from '../media/logos/html5.png';
import css from '../media/logos/css3.png';
import javascript from '../media/logos/javascript.png';
import jquery from '../media/logos/jquery.png';
import react from '../media/logos/react.png';
import bootstrap from '../media/logos/bootstrap.png';
import python from '../media/logos/python.png';
import django from '../media/logos/django.png';
import flask from '../media/logos/flask.png';
import mysql from '../media/logos/mysql.png';
import mongodb from '../media/logos/mongodb.png';
import git from '../media/logos/git.png';
import github from '../media/logos/github.png';
import heroku from '../media/logos/heroku.png';

class Skills extends Component {
    render(){
        return (
            <div>
            <div className="page-header">
                <h1 className="header-text">EXPERIENCE</h1>
            </div>
            <div className="skills">
                <div className="skills-container">
                    <p>I have practical experience working with each of the following languages, frameworks and programmes.</p>
                    <h1>Front-end</h1>
                    <div className="logo-container" data-aos="zoom-in-up">
                        <img src={html} alt="html" className="logos"></img>
                        <img src={css} alt="css" className="logos"></img>
                        <img src={javascript} alt="javascript" className="logos"></img>
                        <img src={jquery} alt="jquery" className="logos"></img>
                        <img src={react} alt="react" className="logos"></img>
                        <img src={bootstrap} alt="bootstrap" className="logos"></img>
                    </div>
                    <hr></hr>
                    <h1>Back-end, frameworks & databases</h1>
                    <div className="logo-container" data-aos="zoom-in-up">
                        <img src={python} alt="python" className="logos"></img>
                        <img src={django} alt="django" className="logos"></img>
                        <img src={flask} alt="flask" className="logos"></img>
                        <img src={mysql} alt="mysql" className="logos"></img>
                        <img src={mongodb} alt="mongodb" className="logos"></img>
                    </div>
                    <hr></hr>
                    <h1>Source control & cloud hosting</h1>
                    <div className="logo-container" data-aos="zoom-in-up">
                        <img src={git} alt="git" className="logos"></img>
                        <img src={github} alt="github" className="logos"></img>
                        <img src={heroku} alt="flask" className="logos"></img>
                    </div>
                    <hr></hr>
                </div>
            </div>
            </div>
        )
    }
}
export default Skills;