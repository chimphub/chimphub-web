import React, { Component } from 'react';

import css from './style.scss';

export default class Register extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Mailchimp API key"
                />

            </div>
        );
    }
}
