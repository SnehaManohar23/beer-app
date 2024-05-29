import React, { useEffect, useState } from 'react';
import './App.css';
import BeerList from './BeerList';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="beer-list-title">BEER LIST</h1>
      <input 
        type="text" 
        placeholder="Search beers..." 
        value={searchTerm}
        onChange={handleSearch} 
      />
      <BeerList beers={filteredBeers} />
    </div>
  );
}

export default App;
