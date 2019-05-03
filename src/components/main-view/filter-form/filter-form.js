import React, { Component } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';

import { getAreaSuggestions, getSkillSuggestions, EXPERIENCE } from '../../../services/services';
import "./filter-form.css";


class FilterForm extends Component {
    constructor() {
        super();
        this.state = {
            area: null,
            experience: null,
            skills: null
        };
    }

    handleChangeCity = (selectedOption) => {
        console.log(this.state.area);
        this.setState({
            area: selectedOption,
            experience: this.state.experience,
            skills: this.state.skills
        });
    }
    handleChangeExperience = (selectedOption) => {
        this.setState({
            area: this.state.area,
            experience: selectedOption,
            skills: this.state.skills
        });
    }
    handleChangeSkills = (selectedOption) => {
        this.setState({
            area: this.state.area,
            experience: this.state.experience,
            skills: selectedOption
        });
    }

    resetFilters = () => {
        this.setState({
            area: null,
            experience: null,
            skills: null
        });
    }
    render() {
        console.log(this.state);
        return <form className="filter-form">
            <div className="filter-form__item">
                <span>Город:</span>
                <AsyncSelect
                    value={this.state.area}
                    isMulti
                    onChange={this.handleChangeCity}
                    placeholder='Москва'
                    loadOptions={getAreaSuggestions}
                    noOptionsMessage={() => '...'}
                    loadingMessage={() => '...'}
                />
            </div>
            <div className="filter-form__item">
                <span>Ключевые навыки:</span>
                <AsyncSelect
                    value={this.state.skills}
                    isMulti
                    onChange={this.handleChangeSkills}
                    placeholder='Java'
                    loadOptions={getSkillSuggestions}
                    noOptionsMessage={() => '...'}
                    loadingMessage={() => '...'}
                />
            </div>
            <div className="filter-form__item">
                <span>Опыт работы:</span>
                <Select
                    value={this.state.experience}
                    onChange={this.handleChangeExperience}
                    placeholder='Более 6 лет'
                    options={EXPERIENCE}
                />
            </div>
            <div className="filter-form__buttons">
                <button type="button" className="filter-form__button--m" onClick={() => this.props.setFilters(this.state)}>Применить фильтры</button>
                <button type="button" onClick={this.resetFilters}>Сбросить</button>
            </div>
        </form>
    }
}
export default FilterForm;