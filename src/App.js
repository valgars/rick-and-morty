import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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




  return (
    <div className="container">
        Characters
    </div>
  );
}

export default App;