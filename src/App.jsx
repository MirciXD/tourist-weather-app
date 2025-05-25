import React, { useState } from 'react';
import { touristPlaces } from './data/places';
import PlacesList from './components/PlacesList';
import PlaceDetails from './components/PlaceDetails';
import './App.css';

function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>TuristInfo România</h1>
        <p>Descoperă obiectivele turistice pe care le recomandam din România</p>
      </header>

      <main className="app-main">
        <PlacesList 
          places={touristPlaces}
          onSelectPlace={setSelectedPlace}
          selectedId={selectedPlace?.id}
        />
        
        {selectedPlace && (
          <PlaceDetails place={selectedPlace} />
        )}
      </main>

      <footer className="app-footer">
        <p>© 2025 TuristInfo România</p>
      </footer>
    </div>
  );
}

export default App;
