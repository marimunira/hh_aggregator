import React, { Component } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';

import { getAreaSuggestions, getSkillSuggestions, EXPERIENCE } from '../../../services/services';
import "./filter-form.css";


class FilterForm extends Component {
    constructor() {
        super();
        this.state = {
            area: [],
            experience: null,
            skills: []
        };
    }

    handleChangeCity = (selectedOption) => {
        console.log(this.state.area);
        this.setState({ area: selectedOption,
            experience: this.state.experience,
            skills: this.state.skills});
    }
    handleChangeExperience = (selectedOption) => {
        this.setState({ area:  this.state.area,
            experience: selectedOption,
            skills: this.state.skills});
    }
    handleChangeSkills = (selectedOption) => {
        this.setState({ area: this.state.area,
            experience: this.state.experience,
            skills: selectedOption});
    }

    resetFilters = () => {
        this.setState({ area: [],
            experience: null,
            skills:[]});
    }
    render() {
        console.log(this.state);
        return <form className="filter-form">
            <label>Город:</label>
            <AsyncSelect
                value={this.state.area}
                isMulti
                onChange={this.handleChangeCity}
                loadOptions={getAreaSuggestions}
            />

            <label>Ключевые навыки:</label>
            <AsyncSelect
                value={this.state.skills}
                isMulti
                onChange={this.handleChangeSkills}
                loadOptions={getSkillSuggestions}
            />
            <label>Опыт работы:</label>
            <Select
                value={this.state.experience}
                onChange={this.handleChangeExperience}
                options={EXPERIENCE}
            />
        <button type="button" onClick={()=> this.props.setFilters(this.state)}>Применить фильтры</button>
        <button type="button" onClick={this.resetFilters}>Сбросить</button>
        </form>
    }
}
export default FilterForm;