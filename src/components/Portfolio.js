import React, { Component } from 'react';
import Slider from 'react-slick';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Portfolio.css';
import project1 from '../media/project1.JPG';
import project2 from '../media/project2.JPG';
import project3 from '../media/project3.JPG';
import project4 from '../media/project4.JPG';
import k2sm from '../media/k2sm.JPG';
import acceler8 from '../media/acceler8_2.JPG';
import weatherapp from '../media/weatherapp2.PNG';
import calculator from '../media/calculator.PNG';
import colander from '../media/colander3.PNG';

class Portfolio extends React.Component {
    state = {
        projects: [
            {
                "name": "Acceler8",
                "descriptionsm": "A review platform for startup accelerators. This application collates and aggregates reviews and ratings of companies posted by users. A five-star rating system is also incorporated to better inform users.",
                "descriptionlg": "A review platform for startup accelerators in the UK. This application collates reviews of companies posted by users. It also incorporates a five-star rating system, with ratings contributing towards average scores for each listed company, which are displayed on site to better inform users",
                "languages": "Python, Django, HTML, CSS, Bootstrap, JavaScript, jQuery & SQL",
                "github": "https://github.com/samalty/csa-project",
                "live": "https://acceler8.herokuapp.com/",
                "image": acceler8
            },
            {
                "name": "Off-Payroll Tax Calculator",
                "descriptionsm": "A tax calculator helping contractors to determine the financial impact of the Off-Payroll legislation, providing a comparative overview of their earnings and tax liabilities when affected and unaffected by the legislation.",
                "descriptionlg": "A tax calculator helping contractors to determine the financial impact of the Off-Payroll legislation on their income. Provided with the contractor's daily rate and expenses, the calculator returns a detailed overview of their earnings and tax liabilities when affected and unaffected by the legislation.",
                "languages": "React, JavaScript, HTML, CSS",
                "github": "https://github.com/samalty/off-payroll-tax-calculator",
                "live": "https://samalty.github.io/off-payroll-tax-calculator/",
                "image": calculator
            },
            {
                "name": "Colander Game",
                "descriptionsm": "An application providing an on-the-go, mobile alternative to the popular dinner party game, requiring players to describe randomly selected items to their team mates while up against the clock.",
                "descriptionlg": "An application providing an on-the-go, mobile alternative to the popular dinner party game, requiring players to describe randomly selected items to their team mates while up against the clock.",
                "languages": "Vue, JavaScript, HTML & CSS",
                "github": "https://github.com/samalty/vue-colander-game",
                "live": "https://samalty.github.io/vue-colander-game/",
                "image": colander
            },
            {
                "name": "K2SocialMedia.co.uk",
                "descriptionsm": "A static website designed to market the services of K2SocialMedia. This site was built using a mobile-first approach and incorporates several responsive features.",
                "descriptionlg": "A static website designed to market the services of K2SocialMedia. This site was built using a mobile-first approach and incorporates several responsive features including a dynamic FAQs section and scroll-to-top buttons.",
                "languages": "HTML, CSS, JavaScript & jQuery",
                "github": "https://github.com/samalty/K2SM",
                "live": "https://samalty.github.io/K2SM/",
                "image": k2sm
            },
            {
                "name": "Weather Query Application",
                "descriptionsm": "Provides users with access to weather conditions in a specified UK region by amending API calls via search bar input. Also uses JavaScript to trigger time and weather-dependent CSS features.",
                "descriptionlg": "An application providing users with access to weather conditions in a specified UK region by amending API calls via search bar input. This app also uses JavaScript to trigger time and weather-dependent CSS features.",
                "languages": "HTML, CSS, JavaScript & jQuery",
                "github": "https://github.com/samalty/weather-query-app",
                "live": "https://samalty.github.io/weather-query-app/",
                "image": weatherapp
            },
            {
                "name": "Project management application",
                "descriptionsm": "A product designed for companies to white-label and invite clients to access, enhancing collaboration over project conception while enabling better structure and management of projects.",
                "descriptionlg": "A product designed for companies to white-label and invite clients to access, enhancing collaboration over project conception while enabling better structure and management of projects.",
                "languages": "Python, Django, HTML, CSS, Bootstrap, JavaScript & jQuery.",
                "github": "https://github.com/samalty/full-stack-project",
                "live": "https://full-stack-frameworks-project.herokuapp.com/accounts/login/",
                "image": project1
            },
            {
                "name": "E-commerce site",
                "descriptionsm": "A free online resource whereby users can browse, list and advertise items for sale. This application incorporates CRUD functionality applied to an SQL database.",
                "descriptionlg": "A free online resource whereby users can browse, list and advertise items of clothing for sale. This application incorporates CRUD functionality which is applied to an SQL database via the browser.",
                "languages": "Python, Flask, HTML, CSS, JavaScript, PostgreSQL & MaterializeCSS",
                "github": "https://github.com/samalty/datacentric-project",
                "live": "https://datacentric-milestone-project.herokuapp.com/",
                "image": project2
            },
            {
                "name": "Premier League Unwanted Records Quiz",
                "descriptionsm": "An interactive football trivia quiz, written in Python. The application tallies up the user's score and ranks them on a leaderboard upon completion of the quiz.",
                "descriptionlg": "An interactive football trivia quiz, written in Python. The application tallies up the user's score and ranks them on a leaderboard upon completion of the quiz.",
                "languages": "Python, Flask, HTML, CSS, JavaScript, jQuery & Bootstrap",
                "github": "https://github.com/samalty/Unwanted_Records_Quiz",
                "live": "http://unwanted-premierleague-records.herokuapp.com/",
                "image": project3
            },
            {
                "name": "Blasé Music Club promotional site",
                "descriptionsm": "A static website designed to help promote Blasé Music Club and its activities. The site shares information about the club and upcoming events, as well as relevant media.",
                "descriptionlg": "A static website designed to help promote Blasé Music Club and its activities. The site shares information about the club and upcoming events, as well as relevant media.",
                "languages": "HTML, CSS, JavaScript, jQuery & Bootstrap",
                "github": "https://github.com/samalty/Stream_One_Project",
                "live": "https://samalty.github.io/Stream_One_Project/",
                "image": project4
            }
        ]
    };
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <div className="page-header">
                    <h1 className="header-text">PORTFOLIO</h1>
                </div>
                <div className="portfolio">
                    <div className="portfolio-container-mini">
                        {this.state.projects.map(project => (
                            <div>
                                <h1 className="grey">{project.name}</h1>
                                <Flippy flipOnHover={false} flipOnClick={true} flipDirection="horizontal" style={{ maxWidth: '500px', 
                                                                                                                   maxHeight: '300px',
                                                                                                                   minWidth: '300px',
                                                                                                                   minHeight: '180px',
                                                                                                                   margin: '0 auto',
                                                                                                                   border: '1px solid #d3d3d3'}}>
                                    <FrontSide style={{ backgroundColor: '#001a33',
                                                        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-pixels.png")',
                                                        padding: '0',
                                                        cursor: 'pointer' }}>
                                        <img src={project.image} alt="" style={{ width: '100%', height: '100%' }}></img>
                                        <button className="flip-button"><p className="flip-button">Click for more info <i className="fas fa-arrow-right"></i></p></button>
                                    </FrontSide>
                                    <BackSide style={{ 
                                                       backgroundColor: '#f2f2f2',
                                                       backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-pixels.png")',
                                                       padding: '5px',
                                                       cursor: 'pointer' }}>
                                        <p className="card-text">{project.descriptionsm}</p>
                                        <p className="card-text">Developed using {project.languages}</p>
                                    </BackSide>
                                </Flippy>
                                <p className="card-text"><i className="fab fa-github grey"></i> <a target="_blank" rel="noopener noreferrer" href={project.github} className="grey">View in Github</a></p>
                                <p className="card-text"><i className="fas fa-desktop grey"></i> <a target="_blank" rel="noopener noreferrer" href={project.live} className="grey">View live app</a></p>
                                <br></br>
                                <hr></hr>
                            </div>
                        ))}
                    </div>
                    <div className="portfolio-container">
                        <div className="sliderStyle" id="Slider">
                            <Slider {...settings}>
                                {this.state.projects.map(project => (
                                    <div>
                                        <h1 className="grey">{project.name}</h1>
                                        <div className="img-container">
                                            <img src={project.image} alt="" className="project-img"></img>
                                        </div>
                                        <p className="project-desc grey"><b>What is it?</b></p>
                                        <p className="project-desc grey">{project.descriptionlg}</p>
                                        <p className="project-desc grey"><b>Languages & frameworks used:</b> {project.languages}</p>
                                        <p className="project-desc grey"><i className="fab fa-github"></i> <a className="grey" target="_blank" rel="noopener noreferrer" href={project.github}>View in Github</a></p>
                                        <p className="project-desc grey"><i className="fas fa-desktop"></i> <a className="grey" target="_blank" rel="noopener noreferrer" href={project.live}>View live app</a></p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;