import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDetails from './components/characters/CharacterDetails';
import CharactersList from './components/characters/CharactersList';
import Pagination from './components/characters/Pagination';
import Navbar from './components/ui/NavBar';
import Episodes from './pages/Episodes';
import WatchList from './pages/WatchList';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<CharacterDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { results, info } = characters;
  let urlCharacters = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(urlCharacters).then((res) => res.json());
      setCharacters(data);
    })();
  }, [urlCharacters]);


  return (
    <div className="container my-4">
      <div className='row d-flex justify-content-center '>
        <CharactersList
          results={results}
        />
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          info={info}
        />
      </div>
    </div>
  );
}

export default App;