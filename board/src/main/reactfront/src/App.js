import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBoard from './components/AddBoard';
import BoardList from './components/BoardList';
import Navbar from './components/Navbar';
import UpdateBoard from './components/UpdateBoard';

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
          <Route path='/updateBoard/:id' element={<UpdateBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
