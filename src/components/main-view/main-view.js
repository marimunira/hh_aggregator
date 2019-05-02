import React, { Component } from 'react';

import SearchForm from './search-form/search-form';
import FilterForm from './filter-form/filter-form';
import VacancyList from './vacancy-list/vacancy-list';

import VACANCIES from '../../other/lorem';
import JOBS from '../../other/lorem_jobs';

class MainView extends Component {
    constructor() {
        super();
        this.state = { query: '', city: '', profarea: [], experience: [] };
        this.setQuery = this.setQuery.bind(this);
        this.setFilters= this.setFilters.bind(this);
    }
    setQuery(value) {
        this.setState({
            query: value,
            city: this.state.city,
            profarea: this.state.profarea,
            experience: this.state.experience
        })
    }

    setFilters(data) {
        var {city, profarea, experience} = data;
        this.setState({
            query: this.state.query,
            city: city,
            profarea: profarea,
            experience: experience
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