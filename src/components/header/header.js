import React  from 'react';

import { Link } from 'react-router-dom';

import "./header.css"


function Header() {
    return <header className='page-header'>
        <div className='page-header__inner'>
            <h1 className="page-header__title page-header__title--nolink"><Link to='/'>Последние вакансии</Link></h1>
            <span>Подбор вакансий идёт с сайта <a href='https://hh.ru/'>hh.ru</a>.</span>
        </div>
    </header>

}
export default Header;