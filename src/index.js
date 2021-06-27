import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { App } from './App';

import './styles/normalize.min.css';
import './styles/font-faces.css';

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById( 'root' )
);

