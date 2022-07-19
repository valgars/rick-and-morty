import React from "react";
import Navbar from "./layouts/Navbar";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import WatchList from "./pages/WatchList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

export default App;


function Home() {
  return (
    <div className="container">
      <div className="row">
        
      </div>
    </div>
  );
}
