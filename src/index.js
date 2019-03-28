import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import configStore from './store/configStore';

const store = configStore();

let Router = HashRouter;

render(
    <div>也爱</div>, document.getElementById("app")
);
