import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <body>
        <Home />
      </body>
      <Footer />
    </div>
  );
}

export default App;
