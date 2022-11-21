import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import More from './More';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
