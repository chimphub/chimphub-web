import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import css from './style.scss';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        fetch('http://localhost:3000')
        .then(raw => raw.json())
        .then(res => {
            this.setState({
                data: res,
            });
        });
    }

    render() {
        console.log(this.state)

        return (
            <div>
                <Helmet
                    link={[{
                        rel: 'icon', href: '/favicon.png',
                    }]}
                />

                <Header />

                <div>{ this.props.children }</div>
            </div>
        );
    }
}
