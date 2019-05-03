import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./vacancy-card.css"


class VacancyCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { id, description, key_skills, salary, name, published_at, employer } = this.props.data;

        return <div className='vacancy__wraper'>
            <article className='vacancy'>
                <h2 className='vacancy__title'><Link to={'/' + id}>{name}</Link></h2>
                <time date-time='25 01 2019'>{published_at}</time>
            </article>
        </div>
        /*return <article className='vacancy vacancy--card'>
            <h2 className='vacancy__title'><a href=''>{name}</a></h2>
            <p className='vacancy__company'>{employer.name}</p>
            <strong className='vacancy__salary'>{salary.from + ' ' + salary.currency}</strong>
            <img alt='company' src={employer.logo_urls["90"]} width='100px' height='100px'></img>
            <p className='vacancy__desc'>{description}</p>
            {key_skills.map((item, index) =><span key={index} className='vacancy__tag vacancy__tag--gray'>{item.name + ' '}</span>)}
            <time date-time='25 01 2019'>{published_at}</time>
        </article>*/

    }

}
export default VacancyCard;