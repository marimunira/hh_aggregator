import React, { Component } from 'react';

import SearchForm from './search-form/search-form';
import FilterForm from './filter-form/filter-form';
import VacancyList from './vacancy-list/vacancy-list';

import JOBS from '../../other/lorem_jobs';

import { getVacancies } from '../../services/services';

class MainView extends Component {
    constructor() {
        super();
        this.state = { query: '', area: null, skills: null, experience: null, data: null, page: 0 };
        this.setQuery = this.setQuery.bind(this);
        this.setFilters = this.setFilters.bind(this);
    }
    setQuery(value) {
        this.setState({
            query: value,
            city: null,
            skills: null,
            experience: null,
            data: this.state.data,
            page: 0
        })
    }

    setFilters(data) {
        var { area, skills, experience } = data;
        this.setState({
            query: this.state.query,
            area: area,
            skills: skills,
            experience: experience,
            data: this.state.data,
            page: 0
        })
    }


    componentDidUpdate(_, prevState) {
        var p = (prevState.page !== this.state.page) ? this.state.page : 0;
        if (prevState.query != this.state.query
            || prevState.skills != this.state.skills
            || prevState.area != this.state.area
            || prevState.experience != this.state.experience) {
            var options = {
                keyWords: this.state.query,
                filters: {
                    area: this.state.area,
                    skills: this.state.skills,
                    experience: this.state.experience
                },
                page: p
            }
            getVacancies(options)
                .then(res =>
                    this.setState({
                        keyWords: this.state.keyWords,
                        area: this.state.area,
                        skills: this.state.skills,
                        experience: this.state.experience,
                        data: res,
                        page: p
                    }));
        }
    }
    render() {
        return <div>
            <SearchForm data={JOBS} setQuery={this.setQuery} />
            <FilterForm setFilters={this.setFilters} />
            <VacancyList data={this.state.data} />
        </div>
    }
}
export default MainView;