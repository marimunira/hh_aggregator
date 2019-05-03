import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainView from './components/main-view/main-view';
import Vacancy from './components/vacancy/vacancy';
import ErrorPage from './components/error-page/error-page';

import PrivateRoute from './other/private-route';

import './App.css';
import './variables.css';

import VACANCIES from './other/lorem';
import JOBS from './other/lorem_jobs';


class App extends Component {

  checkVacancyId(_id) {
    return new Promise(function(resolve, reject) {
      var hasVacancy = VACANCIES.items.map(item => item.id).indexOf(_id) != -1;
      resolve(hasVacancy);
    })
  }
  render() {
    return <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <MainView />} />

          <PrivateRoute validator={this.checkVacancyId} path='/:id' render={(urlProps) =>
            <Vacancy data={VACANCIES.items.filter(item => item.id===urlProps.match.params.id)[0]} />} />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  }
}

export default App;
