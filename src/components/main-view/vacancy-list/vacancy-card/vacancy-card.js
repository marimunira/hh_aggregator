import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./vacancy-card.css"

var options = { month: 'long', day: 'numeric' };

class VacancyCard extends Component {
    constructor(props) {
        super(props);
    }

    getSalaryStr = (from, to, cur) => {
        var res = '';
        if (from)
            res += 'от ' + from;
        else if (to)
            res += 'до ' + from;
        else if (to && from)
            res += ' - ' + to;
        res += ' ' + cur;
        return res;
    }
    render() {
        var requirement = '', responsibility = '', addressName = '',
            salaryFrom = '', salaryTo = '', salaryCurrency = '';
        if (this.props.data.snippet)
            var { requirement, responsibility } = this.props.data.snippet;
        if (this.props.data.address)
            addressName = this.props.data.address.name;
        if (this.props.data.salary)
            var { from: salaryFrom, to: salaryTo, currency: salaryCurrency } = this.props.data.salary;
        var { id,
            name,
            published_at,
            employer: { name: employerName = '' } } = this.props.data;

        var date = (new Date(published_at).toLocaleDateString("ru", options));

        return <div className='vacancy-card__wrapper'>
            <article className='vacancy-card'>
                <header>
                    <h2 className='vacancy-card__title vacancy-card__title--black'><Link to={'/' + id}>{name}</Link></h2>
                    <div className='vacancy-card__salary'>{this.getSalaryStr(salaryFrom, salaryTo, salaryCurrency)}</div>
                </header>
                <small className='vacancy-card__company'>{employerName}</small>
                <address className='vacancy-card__address'>{addressName}</address>
                <p className='vacancy-card__requirement'>{requirement}</p>
                <p className='vacancy-card__responsibility'>{responsibility}</p>
                <time className='vacancy-card__date' dateTime={date}>{date}</time>
            </article>
        </div>
    }

}
export default VacancyCard;