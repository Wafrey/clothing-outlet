import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss'

function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
