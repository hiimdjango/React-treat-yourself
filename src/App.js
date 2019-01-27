import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NavbarNotLogged from './components/NavbarNotLogged';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <NavbarNotLogged />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

          </Switch>

        <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
