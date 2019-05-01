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

  return <Router>
    <Switch>
      <Route exact path="/" render={() =>
        <div>
          <Header />
          <VacancyList data={VACANCIES}/>
          <Footer />
        </div>} />

      <Route exact path='/:id' render={() =>
        <div>
          <Header />
          <Vacancy data={VACANCIES[0]}/>
          <Footer />
        </div>} />

      <Route path="*" component={ErrorPage} />
    </Switch>
  </Router>
}

export default App;
