import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBoard from './components/AddBoard';
import BoardList from './components/BoardList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<BoardList />} />
          <Route path='/' element={<BoardList />} />
          <Route path='/boardList' element={<BoardList />} />
          <Route path='/addBoard' element={<AddBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
