import React, { Component } from 'react';

import SearchForm from './search-form/search-form';
import FilterForm from './filter-form/filter-form';
import VacancyList from './vacancy-list/vacancy-list';

import JOBS from '../../other/lorem_jobs';
import './main-view.css';
import { getVacancies } from '../../services/services';

class MainView extends Component {
    constructor() {
        super();
        this.state = { keyWords: '', area: null, skills: null, experience: null, data: null, page: 0 };
        this.setQuery = this.setQuery.bind(this);
        this.setFilters = this.setFilters.bind(this);
        this.setPage = this.setPage.bind(this);
    }
    setQuery(value) {
        this.setState({
            keyWords: value,
            area: null,
            skills: null,
            experience: null,
            data: this.state.data,
            page: 0
        })
    }

    setFilters(data) {
        var { area, skills, experience } = data;
        this.setState({
            keyWords: this.state.keyWords,
            area: area,
            skills: skills,
            experience: experience,
            data: this.state.data,
            page: 0
        })
    }


    setPage(p) {
        console.log('set page')
        if (p > 0) {
            this.setState({
                keyWords: this.state.keyWords,
                area: this.state.area,
                skills: this.state.skills,
                experience: this.state.experience,
                data: this.state.data,
                page: p - 1
            })
        }
    }

    componentDidUpdate(_, prevState) {
        var p = (prevState.page !== this.state.page) ? this.state.page : 0;
        if (prevState.keyWords != this.state.keyWords
            || prevState.skills != this.state.skills
            || prevState.area != this.state.area
            || prevState.experience != this.state.experience
            || prevState.page != this.state.page) {
            var options = {
                keyWords: this.state.keyWords,
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
        console.log(this.state);
        return <div className='main-content'>
            <SearchForm data={JOBS} setQuery={this.setQuery} />
            <div className='filter-form-wrapper'>
                <FilterForm setFilters={this.setFilters} />
            </div>
            <div className='vacancy-list-wrapper'>
                <VacancyList setPage={this.setPage} data={this.state.data} />
            </div>
        </div>
    }
}
export default MainView;