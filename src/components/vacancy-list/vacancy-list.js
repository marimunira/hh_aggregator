import React, { Component } from 'react';
import VacancyCard from '../vacancy-card/vacancy-card';

import './vacancy-list.css';

import VACANCIES from '../../other/lorem';

class VacancyList extends Component {
    render() {
        return <div>
            {VACANCIES.map((item)=> <VacancyCard data={item}/>)}
            </div>
    }

}
export default VacancyList;