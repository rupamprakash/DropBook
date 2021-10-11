import React from 'react';
import './App.css';
import RocketImage from './images/rocket1.svg';
import { useHistory } from 'react-router-dom'
import RegisterPage from './RegisterPage'

const Herosection = () =>{

    const history = useHistory();

    const handleRoute = () => {
        history.push("/RegisterPage");
    }
    return(
        <div className="hero-section">
            <div className="hero-content">
                <h1>LAUNCH</h1>
                <p>the spcaeship of your career</p>
                <p className="para-2">Let's go on a <strong>Treasure Hunt</strong> of skills</p>
                <img className="rocket_image" src={RocketImage} alt="rocket-image" />      
            </div>
            <button className="hero-btn" onClick={handleRoute}>
                Let's Go
            </button>
        </div>
    )
}

export default Herosection;