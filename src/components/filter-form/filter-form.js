import React from 'react';

import "./filter-form.css"


function FilterForm() {
    return <form className="filter-form">
        <select className="filter-form__city">
            <option>Пункт 1</option>
            <option>Пункт 2</option>
        </select>
        <div className="filter-form__experience"> 
            <div className="filter-form__cluster">Нет опыта</div>
            <div className="filter-form__cluster">До года</div>
            <div className="filter-form__cluster">1-3 года</div>
        </div>

        <div className="filter-form__profarea"> 
            <div className="filter-form__cluster">Продажи</div>
            <div className="filter-form__cluster">Административная работа</div>
            <div className="filter-form__cluster">IT</div>
        </div>
   
    </form>

}
export default FilterForm;