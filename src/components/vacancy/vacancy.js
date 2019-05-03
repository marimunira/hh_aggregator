import React, { Component } from 'react';

import './vacancy.css';

class Vacancy extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.data) {
            var { id, description, key_skills, salary, name, published_at, employer } = this.props.data;
            return <article className='vacancy-page'>
                <h2 className='vacancy-page__title'><a href=''>{name}</a></h2>
                <p className='vacancy-page__company'>{employer.name}</p>
                <strong className='vacancy-page__salary'>{salary.from} р.</strong>
                <img alt='company' src={employer.logo_urls["90"]} width='100px' height='100px'></img>
                <p className='vacancy-page__desc'>{description}</p>
                {key_skills.map((item, index) => <span key={index} className='vacancy-page__tag'>{item.name + ' '}</span>)}
                <time date-time='25 01 2019'>{published_at}</time>
            </article>
        }
        else return <div>Не найдено</div>

    }


}
export default Vacancy;