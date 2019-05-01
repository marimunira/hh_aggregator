import React, { Component } from 'react';

import './vacancy.css';

class Vacancy extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { id, title, company, salary, image, description, tags, date } = this.props.data;
        return <article className='vacancy-page'>
            <h2 className='vacancy-page__title'><a href=''>{title}</a></h2>
            <p className='vacancy-page__company'>{company}</p>
            <strong className='vacancy-page__salary'>{salary} р.</strong>
            <img alt='company' src={image} width='100px' height='100px'></img>
            <p className='vacancy-page__desc'>{description}</p>
            {tags.map((item) => <span className='vacancy-page__tag'>{item}</span>)}
            <time date-time='25 01 2019'>{date}</time>
        </article>

    }


}
export default Vacancy;