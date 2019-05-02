import React, { Component } from 'react';
import VacancyCard from './vacancy-card/vacancy-card';

import './vacancy-list.css';



class VacancyList extends Component {
    render() {
        return <div>
            {this.props.data.map((item)=> <VacancyCard key={item.id} data={item}/>)}
            </div>
    }

}
export default VacancyList;