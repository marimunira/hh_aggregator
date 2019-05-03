import { COUNT_PER_PAGE } from '../other/constants';
const ENDPOINT = 'https://api.hh.ru';

const options = {
    headers: {
        'User-Agent': 'hh_aggregator/1.0 (hh_aggregator@example.com)'
    }
};


const getQueryString = function (keyWords, data, page) {
    var { area, skills, experience } = data;
    var result = '?text=' + keyWords;
    if (skills)
        result += ',' + skills.map(item => item.value).join(',');
    if (experience)
        result += '&experience=' + experience.value;
    if (area)
        result += '&area=' + area.map(item => item.value).join(',');
    result += '&order_by=publication_time';
    result += '&page=' + page + '&per_page=' + COUNT_PER_PAGE;
    return result;
}


export const getVacancyById = (id) => {
    return fetch(ENDPOINT + '/vacancies/' + id)
}

export const getVacancies = (params) => {
    const query = getQueryString(...params);
    return fetch(ENDPOINT + '/vacancies' + query)
        .then(res => res.json())

}

export const getKeywordSuggestions = (startWith) => {
    return fetch(ENDPOINT + '/suggests/vacancy_search_keyword?text=' + startWith)
        .then(res => res.json())
}

export const getAreaSuggestions = (startWith) => {
    if (startWith.length > 2)
        return fetch(ENDPOINT + '/suggests/areas?text=' + startWith)
            .then(res => res.json())
            .then(res => res.items.map(item => { return { value: item.id, label: item.text } }));
}

export const getSkillSuggestions = (startWith) => {
    if (startWith.length > 2)
        return fetch(ENDPOINT + '/suggests/skill_set?text=' + startWith)
            .then(res => res.json())
            .then(res => res.items.map(item => { return { value: item.id, label: item.text } }));;
}

export const EXPERIENCE = [{"value":"noExperience","label":"Нет опыта"},
{"value":"between1And3","label":"От 1 года до 3 лет"},
{"value":"between3And6","label":"От 3 до 6 лет"},
{"value":"moreThan6","label":"Более 6 лет"}];
