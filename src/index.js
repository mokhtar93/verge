import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './App/Components/HomePage/HomePage';
import CreateApplication from './App/Components/CreateApplication/CreateApplication';

ReactDOM.render(<App />, document.getElementById('root'));
