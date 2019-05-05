import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { getAbstractFields, getSalaryStr } from '../../../../other/adapter';

import "./vacancy-card.css"

class VacancyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {
            id,
            name,
            date,
            employerName,
            requirement,
            responsibility,
            addressName,
            salaryFrom,
            salaryTo,
            salaryCurrency
        } = getAbstractFields(this.props.data);

        return <div className='vacancy-card__wrapper'>
            <article className='vacancy-card'>
                <header>
                    <h2 className='vacancy-card__title vacancy-card__title--black'><Link to={'/' + id}>{name}</Link></h2>
                    <div className='vacancy-card__salary'>{getSalaryStr(salaryFrom, salaryTo, salaryCurrency)}</div>
                </header>
                <small className='vacancy-card__company'>{employerName}</small>
                <address className='vacancy-card__address'>{addressName}</address>
                <p className='vacancy-card__requirement'>{parse(requirement)}</p>
                <p className='vacancy-card__responsibility'>{parse(responsibility)}</p>
                <time className='vacancy-card__date' dateTime={date}>{date}</time>
            </article>
        </div>
    }

}
export default VacancyCard;