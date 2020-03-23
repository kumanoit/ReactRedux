import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import postReducer from './reducer/postReducer'

import { createStore } from 'redux';

const store = createStore(postReducer);

ReactDOM.render(
    <App />,document.getElementById('root'));