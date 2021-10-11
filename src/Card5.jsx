import React from 'react'
import Card5Image from './images/studying.svg';

function Card5(props) {
    return (
        <div className="card5">
            <div class="card mb-3 section5_card">
                <div class="row g-0">
                    <div class="col-md-6">
                        <div class="card-body card5_text">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.text}</p>
                        </div>
                    </div>
                    <div class="col-md-6 img_class">
                        <img src={Card5Image} class="img-fluid rounded-start card5_img" alt="Card5Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card5
