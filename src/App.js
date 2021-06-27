import React from 'react'

import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';
import { mainTheme } from 'styles/themes';

import "@fontsource/roboto";

//TODO: cambiar a Open Sans la fuente


export const App = () => {
    
    return (
        <ThemeProvider theme={ mainTheme }>
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        </ThemeProvider>
    )
}
