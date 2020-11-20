import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render(){
        return (
            <div className="home">
                <div className="home-container">
                    <div className="title">
                        <h1 className="title-text">Sam Alty</h1>
                        <h2 className="title-text">Software Developer</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;