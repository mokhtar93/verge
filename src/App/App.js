import React, { Component } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import CreateApplication from './Components/CreateApplication/CreateApplication';

class App extends Component {


  render() {
    
    return (
      <div className="App">
          <Header/>
          <Router>
            <Container>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/create">
                    <CreateApplication />
                  </Route>
                </Switch>
            </Container>
          </Router>
      </div>
    );
  }
}

export default App;
