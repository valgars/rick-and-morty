import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersList from './components/characters/CharactersList';
import Navbar from './components/ui/NavBar';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import WatchList from './pages/WatchList';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { results, info } = characters;
  let urlCharacters = `https://rickandmortyapi.com/api/character/?page=1`;

  useEffect(() => {
    (async function () {
      let data = await fetch(urlCharacters).then((res) => res.json());
      setCharacters(data);
    })();
  }, [urlCharacters]);


  return (
    <div className="container ">
      <div className='row d-flex justify-content-center'>
        <CharactersList
          results={results}
        />
        
      </div>
    </div>
  );
}

export default App;