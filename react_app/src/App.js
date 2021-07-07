import React from 'react';
import logo from './logo.svg';
import POPOSList from './POPOSList';
import Footer from './Footer';
import './App.css';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer/>
    </div>
  );
}

export default App;
