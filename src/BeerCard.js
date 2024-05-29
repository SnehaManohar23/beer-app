import React from 'react';
import './BeerCard.css';

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <img src={beer.image} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p className="price">Price: {beer.price}</p>
      <p className="rating">Rating: {beer.rating.average.toFixed(1)}</p>
      <p className="reviews">({beer.rating.reviews} reviews)</p>
   
    </div>
  );
}

export default BeerCard;
