import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './error-page.css';

export default class ErrorPage extends Component {
    render() {
        return <div className='error-page'>
            <strong>Sorry, not found</strong>
            <p>You can go to the <Link className='error-page__link' to='/'>main page</Link>.</p>
        </div>
    }
}