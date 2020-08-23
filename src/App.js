import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <body>
        <Routes />
      </body>
      <Footer />
    </div>
  );
}

export default App;
