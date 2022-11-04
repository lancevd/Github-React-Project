import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const descText = document.querySelectorAll('.card-text');
    for (let i=0; i<descText.length; i++){
        let newTitle = descText[i].textContent.slice(0, 30)+'...'
        if (descText[i].textContent.length > 20) {
            descText[i].textContent = newTitle
        }
    }
  return (
    <div className="col-sm-6 col-lg-4 mb-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><i>{!props.description ? 'No description available for this repository' : props.description}</i></p>
                < Link to={`../details?name=${props.name}`} className="btn btn-primary">Open Repository</Link>
            </div>
        </div>
    </div>
  )
}

export default Card