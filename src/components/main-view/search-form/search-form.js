import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

import "./search-form.css"


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return <form className="search-form">
            <div className="search_form__wrapper">
                <input id="search" type='text' className="search-form__input" placeholder='Что ищем?'
                    onChange={(e) => this.setState({ value: e.target.value })}
                    onSubmit={(e) => this.setState({ value: e.target.value })} />
            </div>
            <button className="query-form__submit" type="submit" onClick={(e) => {
                this.props.setQuery(this.state.value);
                e.preventDefault();
            }}>Искать</button>

        </form>

    }
}
export default SearchForm;