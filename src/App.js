import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Navigation from './components/Navigation.js';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Navigation>
      <br />
      <Home />
    </div>
  );
}

export default App;
