import React, { Component } from 'react';

import "./header.css"


function Header() {
    return <header className='header header--dark header--centered'>
        <h1 className="header__title header__title--big">Последние вакансии</h1>
        <p>Подбор вакансий идёт с сайта <a href='https://hh.ru/'>hh.ru</a>.</p>
    </header>

}
export default Header;