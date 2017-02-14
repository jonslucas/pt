'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App/App';
import exerciseList from '../../redux/reducers';

render(
    <Provider store={ createStore(exerciseList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }>
        <App />
    </Provider>,
    document.getElementById('body')
);