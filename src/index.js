import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)