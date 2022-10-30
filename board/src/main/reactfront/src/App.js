import React from 'react';
import './App.css';
import AddBoard from './components/AddBoard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddBoard/>
    </div>
  );
}

export default App;
