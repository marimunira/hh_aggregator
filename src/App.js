import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


import Header from './components/header/header';
import Footer from './components/footer/footer';
import VacancyList from './components/vacancy-list/vacancy-list';
import Vacancy from './components/vacancy/vacancy';
import FilterForm from './components/filter-form/filter-form';
import QueryForm from './components/search-form/search-form';
import ErrorPage from './components/error-page/error-page';

import './App.css';
import './variables.css';

import VACANCIES from './other/lorem';
import JOBS from './other/lorem_jobs';


function App() {

  return <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" render={() =><div>
          <QueryForm data={JOBS}/>
          <FilterForm/>
          <VacancyList data={VACANCIES.slice(0, 5)} />
          </div>} />

        <Route exact path='/:id' render={() =>
          <Vacancy data={VACANCIES[0]} />} />

        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
    <Footer />
  </div>
}

export default App;
