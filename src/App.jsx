import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Router basename="/EnergyEmpire">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/station/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
