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
                <div className='vacancy-page__contacts'>
                    <div className='vacancy-page__label'>Контакты:</div>
                    <p>{contactName}</p>
                    {contactPhones.map(item => <p className='vacancy-page__phone vacancy-page__phone--nolink'><a href={'tel:' + item}>{item}</a></p>)}
                    <a href='mailto:'>{contactEmail}</a>
                </div> :
                null;

            const skills = (keySkills.length > 0) ? <div className='vacancy-page__keyskills'>
                <div className='vacancy-page__label'>Ключевые навыки:</div>
                <div className='vacancy-page__keyskills-inner'>
                    {keySkills.map((item) => <div className='vacancy-page__skillitem'>{item}</div>)}
                </div>
            </div> :
                null;

            return <article className='vacancy-page'>
                <header className='vacancy-page__header'>
                    <h1 className='vacancy-page__title'>{name}</h1>
                    <div className='vacancy-page__salary'>{getSalaryStr(salaryFrom, salaryTo, salaryCurrency)}</div>
                    {archived ? <div className='vacancy-page__archived' >Вакансия перенесена в архив.</div> : null}
                    <div className='vacancy-page__company'>{employerName}</div>
                    <div>{department}</div>
                    <address className='vacancy-page__address'>{addressName || area}</address>
                </header>

                <div className="vacancy-page__conditions">
                    <div className='vacancy-page__schedule'>{employment + ', ' + schedule.toLowerCase() + '.'}</div>
                    <div className='vacancy-page__experience'>{'Опыт: ' + experience.toLowerCase() + '.'}</div>
                </div>

                <div className='vacancy-page__description'>
                    {parse(branded_description || description)}
                </div>
                { contacts }
                { skills }
                <div className='vacancy-page__date' >
                    <time dateTime={date}>Опубликовано {date}.</time>
                </div>
            </article>
        }
        else return <div>Не найдено</div>

    }


}
export default Vacancy;