import React, { Component } from 'react';
import VacancyItem from '../vacancy-item/vacancy-item';

import './vacancy-list.css';

import VACANCIES from '../../other/lorem';

class VacancyList extends Component {
    render() {
        return <div>
            {VACANCIES.map((item)=> <VacancyItem data={item}/>)}
            </div>
    }

}
export default VacancyList;