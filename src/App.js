import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Navbar from "./layouts/Navbar";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import WatchList from "./pages/WatchList";
import CharacterList from "./components/characters/CharacterList";
import Pagination from "./components/characters/pagination/Pagination";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

let charactersURL = `https://rickandmortyapi.com/api/character`;

function Home() {
  const [characters, setCharacters] = useState([]);
  const { info, results } = characters;
  const [pageNumber, setPageNumber] = useState(1);


  
  useEffect(() => {
    axios.get(charactersURL)
        .then((response) => {
         setCharacters(response.data);
    })
  }, []);
  if (!characters) return null;
  
  return (
    <div className="container">
      <CharacterList 
        results={results} />
      <Pagination 
        info={info} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}/>
    </div>
  );
}
