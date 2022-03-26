import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import AppStore from "./store/app";
import AppApi from "./services/app";
import AppContext from "./app-context";

const store = new AppStore()
const api = new AppApi(store)

const theme = {
    background: '#232324',
    dark: '#201F1F',
    primary: '#1CB5C9',
    secondary: '#B2B2B2',
    fontWeightNormal: 400,
    fontWeightBold: 700,
    fontSizeSmall: '14px',
    fontsizeMedium: '16px',
    fontSizeBig: '18px',
    fontSizeExtraBig: '24px',
    mdBreakPoint: '768px',
};


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/SearchGitHub">
            <AppContext.Provider value={{store, api}}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </AppContext.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
