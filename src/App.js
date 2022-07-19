import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import WatchList from "./pages/WatchList";
import CharacterList from "./components/characters/CharacterList";
import Pagination from "./components/characters/pagination/Pagination"


function App() {
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


const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // eslint-disable-next-line
  const { info, results } = characters;


  let API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  
  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      setCharacters(data);
    })();
  }, [API]);
  // console.log(characters)

  return (
    <div className="container">
      <CharacterList
        results={results}  />
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}  />
    </div>
  );
}

export default App;