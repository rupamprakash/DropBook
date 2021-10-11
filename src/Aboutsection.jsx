import React from 'react'
import Aboutimage from './images/about.svg';
import bubbleimage from './images/bubble.svg'
import PlanetRed from './images/planetred.png';
import PlanetYellow from './images/planetyellow.png';

function Aboutsection() {
    return (
        <section className='about-section'>
             <div className='container'>
                <div className='row'>
                    <div className="col-10 mx-auto">
                       <div className="row">
                            <div className='col-md-6 about-left-side'>
                                <h1 className="display-2">We are..</h1>
                                <p className="about-para">
                                DROPBOOK is an Ed-Tech Start-up based in Jamshedpur, Jharkhand. We provide students across the country with creative, logical and practical understanding of the most in-demand and emerging skills in the world.
                                </p>
                            </div>

                            <div className='col-md-6 about-right-side'>
                                <img className="aboutimage" src={Aboutimage} alt="about-img"/>
                            </div>
                       </div>
                    </div>
                </div> 
            </div>
            <img className="planet_red" src={PlanetRed} alt="Planet1-Image"/>
            <img className='planet_yellow' src={PlanetYellow} alt="Planet1-Image"/>
        </section>
    )
}

export default Aboutsection
