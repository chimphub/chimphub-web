import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components';
import Start from './components/start';
import Register from './components/register';
import Login from './components/login';

export default () => (
    <Route component={ App }>
        <IndexRoute component={ Start } />
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
    </Route>
);
