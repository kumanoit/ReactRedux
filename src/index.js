import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import postReducer from './reducer/postReducer'
import { Provider } from 'react-redux';

import { createStore } from 'redux';

const store = createStore(postReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);