import React from 'react';
import PlaceDescription from './PlaceDescription';
import WeatherForecast from './WeatherForecast';

const PlaceDetails = ({ place }) => {
  return (
    <div className="place-details">
      <div className="place-header">
        <img 
          src={place.image} 
          alt={place.name}
          className="place-hero-image"
        />
        <div className="place-title">
          <h2>{place.name}</h2>
          <p className="location">{place.city}, județul {place.county}</p>
        </div>
      </div>
      
      <PlaceDescription 
        placeId={place.id} 
        placeName={place.name} 
      />
      
      <WeatherForecast 
        coordinates={place.coordinates} 
        placeName={place.name} 
      />
    </div>
  );
};

export default PlaceDetails;
