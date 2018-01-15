import React from 'react';
import { IndexLink, Link } from 'react-router';

import css from './style.scss';

export default () => (
    <div>
        <ul>
            <li>
                <IndexLink activeClassName={css.active} to="/">Home</IndexLink>
            </li>
            <li>
                <Link activeClassName={css.active} to="/register">Register</Link>
            </li>
            <li>
                <Link activeClassName={css.active} to="/login">Login</Link>
            </li>
        </ul>
    </div>
);
