import React, { Component } from 'react';

import "./vacancy-card.css"


class VacancyCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {id, title, company, salary, image, description, tags, date } = this.props.data;
        return <article className='vacancy vacancy--card'>
            <h2 className='vacancy__title'><a href=''>{title}</a></h2>
            <p className='vacancy__company'>{company}</p>
            <strong className='vacancy__salary'>{salary} р.</strong>
            <img alt='company' src={image} width='100px' height='100px'></img>
            <p className='vacancy__desc'>{description}</p>
            {tags.map((item) =><span className='vacancy__tag vacancy__tag--gray'>{item}</span>)}
            <time date-time='25 01 2019'>{date}</time>
        </article>

    }

}
export default VacancyCard;