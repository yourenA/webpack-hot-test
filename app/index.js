import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component';
import {IndexRoute, Router, Route, hashHistory, browserHistory} from 'react-router';

ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
        </Router>
    ,
    document.getElementById('root')
);
