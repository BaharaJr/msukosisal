import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRoutes from './feats/MainRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
