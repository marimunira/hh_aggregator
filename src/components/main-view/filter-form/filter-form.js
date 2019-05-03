import React, { Component } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';

import { getAreaSuggestions, getSkillSuggestions, EXPERIENCE } from '../../../services/services';
import "./filter-form.css";

const styles = {
    option: styles => ({ ...styles, cursor: 'pointer' }),
    control: styles => ({ ...styles, cursor: 'text' }),
    multiValueRemove: (styles, isSelected) => { 
       // var hoverColor = isSelected ? 'var(--color-accent)' : 'white'
        return  {...styles, cursor: 'pointer'/*, backgroundColor: hoverColor*/} 
    },
    indicatorsContainer: styles => ({ ...styles, cursor: 'pointer' })
    /*option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: styles => ({ ...styles, cursor: 'pointer' }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),*/
  };

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
                    styles={styles}
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
                    styles={styles}
                />
            </div>
            <div className="filter-form__item">
                <span>Опыт работы:</span>
                <Select
                    value={this.state.experience}
                    onChange={this.handleChangeExperience}
                    placeholder='Более 6 лет'
                    options={EXPERIENCE}
                    styles={styles}
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