const getQueryString = function (query, data, page) {
    var { area, profarea, experience } = data;
    var result = '?text=' + query;
    if (experience)
        result += '&experience=' + experience.value;
    if (area)
        result += '&area=' + area.map(item=>item.value).join(',');
    if (profarea)
        result += '&specialization=' + profarea.map(item=>item.value).join(',');
    result += '&order_by=publication_time';
    result += '&page=' + page + '&per_page=20';
    return result;
}

export default getQueryString;