import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: true
    }
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav(event) {
    this.setState((prevState) => ({
      toggleNav: !prevState.toggleNav
    }));
  }
  componentDidMount(){
    Aos.init({
      duration: 1000
    });
    scrollToComponent(this.About, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'});
    scrollToComponent(this.Skills, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'});
    scrollToComponent(this.Portfolio, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'});
    scrollToComponent(this.Contact, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'});
    scrollToComponent(this.Home, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'});
  }
  render() {
    window.addEventListener('scroll', () => {
      const element = document.getElementById("nav");
      //const button = document.getElementById("scrollTop");
      if (window.scrollY > 50) {
          element.classList.add('scrolled');
      } else element.classList.remove('scrolled');
      //if (window.pageYOffset > 1000) {
      //    button.classList.add('visible');
      //} else button.classList.remove('visible');
    });
    return (
      <div className="App">
        <header className="App-header">
          <div className="navbar-container">
            <nav className="navbar" id="nav">
              <ul>
                <li onMouseEnter={this.toggleNav} 
                    onMouseLeave={this.toggleNav}>
                  <a className="click-scroll" 
                     onClick={() => scrollToComponent(this.Home, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'})}>
                    <p className="nav-text">Home |</p>
                  </a>
                </li>
                <li onMouseEnter={this.toggleNav} 
                    onMouseLeave={this.toggleNav}>
                  <a className="click-scroll" 
                     onClick={() => scrollToComponent(this.About, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'})}>
                    <p className="nav-text"> About |</p>
                  </a>
                </li>
                <li onMouseEnter={this.toggleNav} 
                    onMouseLeave={this.toggleNav}>
                  <a className="click-scroll" 
                     onClick={() => scrollToComponent(this.Skills, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'})}>
                    <p className="nav-text"> Experience |</p>
                  </a>
                </li>
                <li onMouseEnter={this.toggleNav} 
                    onMouseLeave={this.toggleNav}>
                  <a className="click-scroll" 
                     onClick={() => scrollToComponent(this.Portfolio, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'})}>
                    <p className="nav-text"> Portfolio |</p>
                  </a>
                </li>
                <li onMouseEnter={this.toggleNav} 
                    onMouseLeave={this.toggleNav}>
                  <a className="click-scroll" 
                     onClick={() => scrollToComponent(this.Contact, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'})}>
                    <p className="nav-text"> Contact</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <body>
          <div className="row">
            <div ref={(section) => { this.Home = section; }}>
              <Home />
              <button className="scrollDown"
                      onClick={() => scrollToComponent(this.About, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'})}>
                <p className="scroll-text">Scroll down</p>
                <i className="material-icons" id="small-icon">keyboard_arrow_down</i>
              </button>
            </div>
            <div ref={(section) => { this.About = section; }}>
              <About />
            </div>
            <div ref={(section) => { this.Skills = section; }}>
              <Skills />
            </div>
            <div ref={(section) => { this.Portfolio = section; }}>
              <Portfolio />
            </div>
            <div ref={(section) => { this.Contact = section; }}>
              <Contact />
            </div>
          </div>
        </body>
        <p></p>
        <button className="scrollTop" id="scrollTop"
                onClick={() => scrollToComponent(this.Home, {offset: 0, align: 'top', duration: 1000, ease: 'inCirc'})}>
          <i className="material-icons" id="small-icon">keyboard_arrow_up</i>
        </button>
      </div>
    );
  }
}

export default App;
