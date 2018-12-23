import React from 'react';
// import './robots';
import './Card.css'

const Card = ({ id, name, email }) => {
    return (
        <div className="grid__item">
            <img className="grid__img" src={`https://robohash.org/${id}`} alt="headshot"/>
            <div className="grid__body">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
