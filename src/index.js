import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import configStore from './store/configStore';

const store = configStore();

let Router = HashRouter;

render(
    <p>也爱asdf</p>, document.getElementById("app")
);
