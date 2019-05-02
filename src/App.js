import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ErrorPage from './components/error-page/error-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import VacancyList from './components/vacancy-list/vacancy-list';
import Vacancy from './components/vacancy/vacancy';

import './App.css';
import './variables.css';

import VACANCIES from './other/lorem';

function App() {

  return <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" render={() =>
          <VacancyList data={VACANCIES} />} />

        <Route exact path='/:id' render={() =>
          <Vacancy data={VACANCIES[0]} />} />

        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
    <Footer />
  </div>
}

export default App;
