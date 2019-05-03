import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainView from './components/main-view/main-view';
import Vacancy from './components/vacancy/vacancy';
import ErrorPage from './components/error-page/error-page';

import PrivateRoute from './other/private-route';
import { checkVacancyById } from './services/services';


class App extends Component {

  render() {
    return <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MainView} />

          <PrivateRoute exact validator={checkVacancyById} path='/:id' component={Vacancy} />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  }
}

export default App;
