/**
 * @format
 */
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import store from "./src/Redux/Store";

const WrappedApp = () => {
    return (
        <Provider store={store}>
                <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => WrappedApp);
