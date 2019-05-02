import React, { Component } from 'react';
import Select from 'react-select';

import "./filter-form.css";

import AREAS from '../../../other/lorem_areas';
import PROFAREAS from '../../../other/lorem_profareas';
import EXPERIENCE from '../../../other/lorem_experience';

class FilterForm extends Component {
    constructor() {
        super();
        this.state = {
            area: [],
            experience: null,
            profarea: []
        };
    }

    handleChangeCity = (selectedOption) => {
        this.setState({ area: selectedOption,
            experience: this.state.experience,
            profarea: this.state.profarea});
    }
    handleChangeExperience = (selectedOption) => {
        this.setState({ area:  this.state.area,
            experience: selectedOption,
            profarea: this.state.profarea});
    }
    handleChangeProfarea = (selectedOption) => {
        this.setState({ area: this.state.area,
            experience: this.state.experience,
            profarea: selectedOption});
    }

    resetFilters = () => {
        this.setState({ area: [],
            experience: null,
            profarea:[]});
    }
    render() {
        console.log(this.state);
        return <form className="filter-form">
            <label>Город:</label>
            <Select
                value={this.state.area}
                isMulti
                onChange={this.handleChangeCity}
                options={AREAS}
            />

            <label>Отрасль:</label>
            <Select
                value={this.state.profarea}
                isMulti
                onChange={this.handleChangeProfarea}
                options={PROFAREAS}
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