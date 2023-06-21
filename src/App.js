import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainIndex from './components/MainIndex';
import MainJoin from './components/MainJoin';
import Header from './components/Header';
import Footer from './components/Footer';
import MainDiscovers from './components/MainDiscovers';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainIndex} />
          <Route path="/join" component={MainJoin} />
          <Route path="/discovers" component={MainDiscovers} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
