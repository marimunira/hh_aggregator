import React, { Component } from 'react';
import VacancyCard from './vacancy-card/vacancy-card';
import Pagination from "react-js-pagination";

import './vacancy-list.css';

import {COUNT_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../../other/constants';

class VacancyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
        this.handlePageChange= this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
        this.props.setPage(pageNumber);
    }
    render() {
        console.log(this.props.data);
        if (this.props.data)
        return <div>
            {this.props.data.items.map((item) => <VacancyCard key={item.id} data={item} />)}
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={COUNT_PER_PAGE}
                totalItemsCount={this.props.data.found}
                pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                onChange={this.handlePageChange}
                innerClass='vacancy-list__pagination'
                itemClass='vacancy-list__pagination-item'
                linkClass='vacancy-list__pagination-link'
                activeClass='vacancy-list__pagination-item--active'
                disabledClass='vacancy-list__pagination-item--disabled'
                hideDisabled
                hideFirstLastPages
      />
            </div>
            else return <div>Нет результатов</div>
    }

}
export default VacancyList;