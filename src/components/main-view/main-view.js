import React, { Component } from 'react';

import SearchForm from './search-form/search-form';
import FilterForm from './filter-form/filter-form';
import VacancyList from './vacancy-list/vacancy-list';

import VACANCIES from '../../other/lorem';
import JOBS from '../../other/lorem_jobs';

import { getAreas } from '../../services/services';

class MainView extends Component {
    constructor() {
        super();
        this.state = { query: '', city: '', skills: [], experience: [] };
        this.setQuery = this.setQuery.bind(this);
        this.setFilters= this.setFilters.bind(this);
    }
    setQuery(value) {
        this.setState({
            query: value,
            city: this.state.city,
            skills: this.state.skills,
            experience: this.state.experience
        })
    }

    setFilters(data) {
        var {city, skills, experience} = data;
        this.setState({
            query: this.state.query,
            city: city,
            skills: skills,
            experience: experience
        })
    }

    componentDidMount() {
           //fetch('https://api.hh.ru/vacancies?text=%D0%9F%D1%80%D0%BE%D0%B4%D0%B0%D0%B2%D0%B5%D1%86&area=2')
           fetch('https://api.hh.ru/suggests/vacancy_search_keyword?text=Про')
           .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }
    render() {
        //console.log(this.state);
        return <div>
            <SearchForm data={JOBS} setQuery={this.setQuery} />
            <FilterForm setFilters={this.setFilters}/>
            <VacancyList data={VACANCIES.items.slice(0, 5)} />
        </div>
    }
}
export default MainView;