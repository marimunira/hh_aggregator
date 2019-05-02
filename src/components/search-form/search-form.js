import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

import "./search-form.css"


class QueryForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return <form className="query-form">
            <Autocomplete
                getItemValue={(item) => item}
                items={this.props.data}
                shouldItemRender={(item, value) => item.toLowerCase().startsWith(value.toLowerCase())}
                renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'var(--color-invert)' : 'white', cursor: 'pointer' }}>
                        {item}
                    </div>
                }
                renderInput={(props) => <input id="search" className="search-input" {...props} />}
                value={this.state.value}
                onChange={(e) => this.setState({ value: e.target.value })}
                onSelect={(val) => this.setState({ value: val })} //TODO Add request after 'Enter'*/
            />

            <button className="query-form__submit" type="submit">Искать</button>

        </form>

    }
}
export default QueryForm;