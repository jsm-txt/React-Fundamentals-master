import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import POPOSList from './POPOSList';
import About from './About'
import Footer from './Footer';
import POPOSDetails from './POPOSDetails'
import './App.css';
import Title from './Title';

function App() {
  return (
    <Router>

      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
