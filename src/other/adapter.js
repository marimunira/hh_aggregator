import nullsafe from 'nullsafe';

const options = { month: 'long', day: 'numeric' };

export const getVacancyFields = (data) => {
    var { id,
        name,
        published_at,
    } = data;
    var date = (new Date(published_at).toLocaleDateString("ru", options));
    const zip = nullsafe(data);
    var addressName = zip.get('address').get('name').value || '';
    var area = zip.get('area').get('name').value || '';
    var salaryFrom = formatNumber(zip.get('salary').get('from').value) || '';
    var salaryTo = formatNumber(zip.get('salary').get('to').value) || '';
    var salaryCurrency = zip.get('salary').get('currency').value || '';
    var employerName = zip.get('employer').get('name').value || '';
    var branded_description = zip.get('branded_description').value || '';
    var description = zip.get('description').value || '';
    var employment = zip.get('employment').get('name').value || '';
    var experience = zip.get('experience').get('name').value || '';
    var schedule = zip.get('schedule').get('name').value || '';
    var department = zip.get('department').get('name').value || '';
    var keySkills = zip.get('key_skills').value;
    keySkills = keySkills ? keySkills.map((item) => item.name) : [];
    var contactName = zip.get('contacts').get('name').value || '';
    var contactEmail = zip.get('contacts').get('email').value || '';
    var contactPhones = zip.get('contacts').get('phones').value || [];
    contactPhones = contactPhones.length > 0 ? contactPhones.map(item => item.number) : [];
    var archived = zip.get('archived').value;

    return {
        id,
        name,
        published_at,
        date,
        addressName,
        area,
        salaryFrom,
        salaryTo,
        salaryCurrency,
        employerName,
        branded_description,
        description,
        employment,
        experience,
        schedule,
        department,
        keySkills,
        contactName,
        contactEmail,
        contactPhones,
        archived
    }
}

export const getSalaryStr = (from, to, cur) => {
    var res = '';
    if (from && to)
        res = to + ' - ' + from;
    else if (from)
        res = 'от ' + from;
    else if (to)
        res = 'до ' + to;
    res += ' ' + cur.replace('RUR', 'руб.');
    return res;
}

function formatNumber(x) {
    if (x)
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const getAbstractFields = (data) => {
    var { id,
        name,
        published_at,
        } = data;

    var date = (new Date(published_at).toLocaleDateString("ru", options));
    const zip = nullsafe(data);
    var employerName = zip.get('employer').get('name').value || '';
    var requirement = zip.get('snippet').get('requirement').value || '';
    var responsibility = zip.get('snippet').get('responsibility').value || '';
    var area = zip.get('area').get('name').value || '';
    var addressName = zip.get('address').get('name').value || '';
    var salaryFrom = formatNumber(zip.get('salary').get('from').value) || '';
    var salaryTo = formatNumber(zip.get('salary').get('to').value) || '';
    var salaryCurrency = zip.get('salary').get('currency').value || '';
    return {
        id,
        name,
        date,
        employerName,
        requirement,
        responsibility,
        addressName,
        area,
        salaryFrom,
        salaryTo,
        salaryCurrency
    }
    
}
