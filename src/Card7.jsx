import React from 'react'
import StudentImage from './images/Rupam_img.jpeg'

function Card7(props) {
    return (
        <section className="card7">
            <div class="card" style={{height: 280, width:280,}}>
                <img src={props.image} class="card7_img" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{props.name} {props.surname}</h5>
                    <h6 className="card-title">{props.school}</h6>
                    <p class="card-text">{props.reviews}</p>
                </div>
            </div>
        </section>
        
    )
}

export default Card7
