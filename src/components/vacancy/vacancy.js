import React, { Component } from 'react';
import parse from 'html-react-parser';
import { getVacancyById } from '../../services/services';
import './vacancy.css';


var options = { month: 'long', day: 'numeric' };
class Vacancy extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    componentDidMount() {
        getVacancyById(this.props.match.params.id)
            .then(res => this.setState({ data: res }))
    }
    render() {
        console.log(this.state.data)
        if (this.state.data) {
            var addressName = '',
            salaryFrom = '', salaryTo = '', salaryCurrency = '';
        if (this.state.data.address)
            addressName = this.props.data.address.name;
        /*if (this.state.data.hasOwnProperty('salary'))
            var { from: salaryFrom, to: salaryTo, currency: salaryCurrency } = this.props.data.salary;*/
        var { id,
            name,
            published_at,
            branded_description,
            employer: { name: employerName = '' } } = this.state.data;

             var date = (new Date(published_at).toLocaleDateString("ru", options));

            return <article className='vacancy-page'>
                <h2 className='vacancy-page__title'>{name}</h2>
                <p className='vacancy-page__company'>{employerName}</p>
                {parse(branded_description)}
                <time date-time='25 01 2019'>{date}</time>
            </article>
        }
        else return <div>Не найдено</div>

    }


}
export default Vacancy;