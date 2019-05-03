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
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }
    render() {
        console.log(this.props.data);
        if (this.props.data)
        return <div>
            {this.props.data.items.map((item) => <VacancyCard key={item.id} data={item} />)}
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={COUNT_PER_PAGE}
                totalItemsCount={450}
                pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                onChange={this.handlePageChange}
      />
            </div>
            else return <div>Нет результатов</div>
    }

}
export default VacancyList;