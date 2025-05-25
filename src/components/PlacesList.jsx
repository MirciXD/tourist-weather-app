import React from 'react';

const PlacesList = ({ places, onSelectPlace, selectedId }) => {
  return (
    <div className="places-list">
      <h2>Alege un obiectiv turistic:</h2>
      <div className="places-grid">
        {places.map(place => (
          <button
            key={place.id}
            onClick={() => onSelectPlace(place)}
            className={`place-card ${selectedId === place.id ? 'selected' : ''}`}
          >
            <img 
              src={place.image} 
              alt={place.name}
              className="place-image"
            />
            <div className="place-info">
              <h3>{place.name}</h3>
              <p>{place.city}, {place.county}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlacesList;
