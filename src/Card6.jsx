import React from 'react'
import Bonusbtn from './Bonusbtn'

function Card6(props) {
    return (
        <div className="card6">
            <div class="card" style={{width: 150, height: 160}}>
                <Bonusbtn text="BONUS" /> 
                <div class="card-body">
                    <h5 className="card-title" style={{marginTop: 25}}>Hello</h5>
                    <p className="card-text">{props.bonus}</p>                  
                </div>
            </div>
        </div>
    )
}

export default Card6
