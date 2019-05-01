import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import VacancyList from './components/vacancy-list/vacancy-list';

import './App.css';
import './variables.css';


function App() {
  return (
    <div>
      <Header />
      <VacancyList/>
      <Footer />
    </div>
  );
}

export default App;
