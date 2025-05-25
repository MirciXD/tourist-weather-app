import React, { useState, useEffect } from 'react';
import { getObjectiveDescription } from '../services/mongoAPI';

const PlaceDescription = ({ placeId, placeName }) => {
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        setLoading(true);
        setError(null);
        const descData = await getObjectiveDescription(placeId);
        setDescription(descData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDescription();
  }, [placeId]);

  if (loading) {
    return (
      <div className="description-section">
        <h3>Despre {placeName}</h3>
        <div className="loading">Se încarcă descrierea...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="description-section">
        <h3>Despre {placeName}</h3>
        <div className="error">Eroare: {error}</div>
      </div>
    );
  }

  return (
    <div className="description-section">
      <h3>Despre {placeName}</h3>
      
      <div className="description-content">
        <p className="main-description">{description.description}</p>
        
        <div className="info-grid">
          <div className="info-card">
            <h4>Activități</h4>
            <ul>
              {description.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
          
          <div className="info-card">
            <h4>Facilități</h4>
            <ul>
              {description.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
          
          <div className="info-card">
            <h4>Perioada optimă</h4>
            <p>{description.bestTime}</p>
          </div>
          
          <div className="info-card">
            <h4>Sfaturi utile</h4>
            <p>{description.tips}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDescription;