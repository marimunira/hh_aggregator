import React, { Component } from 'react';
import parse from 'html-react-parser';

import { getVacancyFields, getSalaryStr } from '../../other/adapter';
import { getVacancyById } from '../../services/services';

import './vacancy.css';


class Vacancy extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    componentDidMount() {
        getVacancyById(this.props.match.params.id)
            .then(res => this.setState({ data: res }))
    }
    render() {
        console.log(this.state.data);
        if (this.state.data) {
            var {
                id,
                name,
                published_at,
                date,
                addressName,
                area,
                salaryFrom,
                salaryTo,
                salaryCurrency,
                employerName,
                branded_description,
                description,
                employment,
                experience,
                schedule,
                department,
                keySkills,
                contactName,
                contactEmail,
                contactPhones,
                archived
            } = getVacancyFields(this.state.data);

            console.log(contactPhones);

            const contacts = (contactPhones.length > 0 || contactEmail) ?
                <div>
                    <p>Контакты: </p>
                    <p>{contactName}</p>
                    <a href='mailto:'>{contactEmail}</a>
                    {contactPhones.map(item => <div><a href={'tel:' + item}>{item}</a></div>)}
                </div> : 
                null;

            return <article className='vacancy-page'>
                <header>
                    <h2 className='vacancy-page__title'>{name}</h2>
                    <div className='vacancy-page__salary'>{getSalaryStr(salaryFrom, salaryTo, salaryCurrency)}</div>
                    { archived ? <p>Вакансия перенесена в архив.</p> : null }
                </header>              
                <p className='vacancy-page__company'>{employerName}</p>
                <p>{department}</p>
                <address>{addressName||area}</address>
                <p>{employment + ', ' + schedule.toLowerCase() + '.'}</p>
                <p>{'Опыт: ' +  experience.toLowerCase() + '.'}</p>
                {parse(branded_description || description)}
                {keySkills.map((item) => <div>{item}</div>)}
                { contacts }
                <time dateTime={date}>Опубликовано {date}.</time>
            </article>
        }
        else return <div>Не найдено</div>

    }


}
export default Vacancy;