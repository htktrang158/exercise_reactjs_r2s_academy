import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './common/DefaultLayout';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<DefaultLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
