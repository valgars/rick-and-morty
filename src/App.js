import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDetails from './components/characters/CharacterDetails';
import CharactersList from './components/characters/CharactersList';
import Pagination from './components/characters/Pagination';
import Navbar from './components/ui/NavBar';
import Episodes from './pages/Episodes';
import Search from './components/search/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </Router>
  );
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const { results, info } = characters;
  let urlCharacters = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(urlCharacters).then((res) => res.json());
      setCharacters(data);
    })();
  }, [urlCharacters]);


  return (
    <div className="container">
      <div className='row d-flex justify-content-center '>
        <Search 
          setSearch={setSearch} 
          setPageNumber={setPageNumber} 
        />
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