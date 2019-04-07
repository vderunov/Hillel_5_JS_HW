$('.last-name-jq')
    .on('input', checkValueLastName)
    .on('input', getValidate)
    .get(0);
$('.first-name-jq')
    .on('input', checkValueFirstName)
    .on('input', getValidate)
    .get(0);
$('.end-date-jq')
    .on('input', checkEndDate)
    .on('input', getValidate)
    .get(0);
$('.start-date-jq')
    .on('input', checkStartDate)
    .on('input', getValidate)
    .get(0);
$('.age-jq')
    .on('input', checkAge)
    .on('input', getValidate)
    .get(0);
$('.add_btn-jq')
    .on('click', makeStudTable)
    .get(0);
$('.cancel_btn-jq')
    .on('click', clearField)
    .get(0);

function clearField() {
    let allWarningBorder = $('.warning-border');
    let inputEndDate = $('.input-end-date-jq').get(0);
    let inputStartDate = $('.input-start-date-jq').get(0);
    let inputAge = $('.input-age-jq').get(0);
    let inputLastName = $('.input-last-name-jq').get(0);
    let inputFirstName = $('.input-first-name-jq').get(0);

    for (let i = 0; i < allWarningBorder.length; i++) {
        allWarningBorder[i].classList.remove('warning-border');
    }

    if (inputLastName.children[1]) {
        inputLastName.removeChild(inputLastName.children[1]);
    }

    if (inputFirstName.children[1]) {
        inputFirstName.removeChild(inputFirstName.children[1]);
    }

    if (inputEndDate.children[1]) {
        inputEndDate.removeChild(inputEndDate.children[1]);
    }

    if (inputStartDate.children[1]) {
        inputStartDate.removeChild(inputStartDate.children[1]);
    }

    if (inputAge.children[1]) {
        inputAge.removeChild(inputAge.children[1]);
    }
}

function checkValueLastName() {
    let lastNameJq = $('.last-name-jq').get(0);
    let inputLastName = $('.input-last-name-jq').get(0);
    let valueLastName = $('.last-name-jq').val();

    if (lastNameJq.className === 'last-name-jq warning-border' && valueLastName === '') {
        lastNameJq.classList.remove('warning-border');
        inputLastName.removeChild(inputLastName.children[1]);
        return;
    }

    if (valueLastName == false) {
        return;
    }

    for (let i = 1; i < valueLastName.length; i++) {
        let check = valueLastName.charCodeAt(i);
        if (
            !(check >= 97 && check <= 122) &&
            !(check >= 1072 && check <= 1103) &&
            !(check >= 65 && check <= 90) &&
            !(check >= 1040 && check <= 1071)
        ) {
            if (lastNameJq.className !== 'last-name-jq warning-border') {
                lastNameJq.classList.add('warning-border');
                $('<span>Фамилия должна содержать только буквенные символы!</span>')
                    .appendTo('.input-last-name-jq')
                    .addClass('warning-span');
                return;
            }
            return;
        }
    }

    for (let i = 1; i < valueLastName.length; i++) {
        let check = valueLastName.charCodeAt(i);
        if ((check >= 65 && check <= 90) || (check >= 1040 && check <= 1071)) {
            if (lastNameJq.className !== 'last-name-jq warning-border') {
                lastNameJq.classList.add('warning-border');
                $('<span>Лишняя заглавная буква в фамилии!</span>')
                    .appendTo('.input-last-name-jq')
                    .addClass('warning-span');
                return;
            }
            return;
        }
    }

    for (let i = 0; i < 1; i++) {
        let check = valueLastName.charCodeAt(0);
        if (
            !(check >= 65 && check <= 90) &&
            !(check >= 97 && check <= 122) &&
            !(check >= 1072 && check <= 1103) &&
            !(check >= 1040 && check <= 1071)
        ) {
            if (lastNameJq.className !== 'last-name-jq warning-border') {
                lastNameJq.classList.add('warning-border');
                $('<span>Фамилия должна содержать только буквенные символы!</span>')
                    .appendTo('.input-last-name-jq')
                    .addClass('warning-span');
                return;
            }
            return;
        }
    }

    if (
        !(valueLastName.charCodeAt(0) >= 65 && valueLastName.charCodeAt(0) <= 90) &&
        !(valueLastName.charCodeAt(0) >= 1040 && valueLastName.charCodeAt(0) <= 1071)
    ) {
        if (lastNameJq.className !== 'last-name-jq warning-border') {
            lastNameJq.classList.add('warning-border');
            $('<span>Первая буква должна быть заглавной!</span>')
                .appendTo('.input-last-name-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (lastNameJq.className === 'last-name-jq warning-border') {
        lastNameJq.classList.remove('warning-border');
        inputLastName.removeChild(inputLastName.children[1]);
    }
}

function checkValueFirstName() {
    let firstNameJq = $('.first-name-jq').get(0);
    let inputFirstName = $('.input-first-name-jq').get(0);
    let valueFirstName = $('.first-name-jq').val();

    if (firstNameJq.className === 'first-name-jq warning-border' && valueFirstName === '') {
        firstNameJq.classList.remove('warning-border');
        inputFirstName.removeChild(inputFirstName.children[1]);
        return;
    }

    if (valueFirstName == false) {
        return;
    }

    for (let i = 1; i < valueFirstName.length; i++) {
        let check = valueFirstName.charCodeAt(i);
        if (
            !(check >= 97 && check <= 122) &&
            !(check >= 1072 && check <= 1103) &&
            !(check >= 65 && check <= 90) &&
            !(check >= 1040 && check <= 1071)
        ) {
            if (firstNameJq.className !== 'first-name-jq warning-border') {
                firstNameJq.classList.add('warning-border');
                $('<span>Имя должно содержать только буквенные символы!</span>')
                    .appendTo('.input-first-name-jq')
                    .addClass('warning-span');
                return;
            }
            return;
        }
    }

    for (let i = 1; i < valueFirstName.length; i++) {
        let check = valueFirstName.charCodeAt(i);
        if ((check >= 65 && check <= 90) || (check >= 1040 && check <= 1071)) {
            if (firstNameJq.className !== 'first-name-jq warning-border') {
                firstNameJq.classList.add('warning-border');
                $('<span>Лишняя заглавная буква в имени!</span>')
                    .appendTo('.input-first-name-jq')
                    .addClass('warning-span');
                return;
            }
            return;
        }
    }

    for (let i = 0; i < 1; i++) {
        let check = valueFirstName.charCodeAt(0);
        if (
            !(check >= 65 && check <= 90) &&
            !(check >= 97 && check <= 122) &&
            !(check >= 1072 && check <= 1103) &&
            !(check >= 1040 && check <= 1071)
        ) {
            if (firstNameJq.className !== 'first-name-jq warning-border') {
                firstNameJq.classList.add('warning-border');
                $('<span>Имя должно содержать только буквенные символы!</span>')
                    .appendTo('.input-first-name-jq')
                    .addClass('warning-span');
                return;
            }
            return;
        }
    }

    if (
        !(valueFirstName.charCodeAt(0) >= 65 && valueFirstName.charCodeAt(0) <= 90) &&
        !(valueFirstName.charCodeAt(0) >= 1040 && valueFirstName.charCodeAt(0) <= 1071)
    ) {
        if (firstNameJq.className !== 'first-name-jq warning-border') {
            firstNameJq.classList.add('warning-border');
            $('<span>Первая буква должна быть заглавной!</span>')
                .appendTo('.input-first-name-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (firstNameJq.className === 'first-name-jq warning-border') {
        firstNameJq.classList.remove('warning-border');
        inputFirstName.removeChild(inputFirstName.children[1]);
    }
}

function checkEndDate() {
    let endDateJq = $('.end-date-jq').get(0);
    let valueEndDate = $('.end-date-jq').val();
    let inputEndDate = $('.input-end-date-jq').get(0);
    let valueStartDate = $('.start-date-jq').val();

    if (endDateJq.className === 'end-date-jq warning-border' && valueEndDate === '') {
        endDateJq.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
        return;
    }

    if (valueEndDate == false) {
        return;
    }

    if (valueEndDate > 2020 && endDateJq.className === 'end-date-jq warning-border') {
        endDateJq.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }

    if (valueEndDate > 2020) {
        if (endDateJq.className !== 'end-date-jq warning-border') {
            endDateJq.classList.add('warning-border');
            $('<span>Максимальный год окончания 2020!</span>')
                .appendTo('.input-end-date-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (valueEndDate < 1950 && endDateJq.className === 'end-date-jq warning-border') {
        endDateJq.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }

    if (valueEndDate < 1950) {
        if (endDateJq.className !== 'end-date-jq warning-border') {
            endDateJq.classList.add('warning-border');
            $('<span>Минимальный год окончания 1950!</span>')
                .appendTo('.input-end-date-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (valueEndDate < valueStartDate && endDateJq.className === 'end-date-jq warning-border') {
        endDateJq.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }

    if (valueEndDate < valueStartDate) {
        if (endDateJq.className !== 'end-date-jq warning-border') {
            endDateJq.classList.add('warning-border');
            $('<span>Дата окончания меньше даты поступления!</span>')
                .appendTo('.input-end-date-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (endDateJq.className === 'end-date-jq warning-border') {
        endDateJq.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }
}

function checkStartDate() {
    let startDateJq = $('.start-date-jq').get(0);
    let valueStartDate = $('.start-date-jq').val();
    let inputStartDate = $('.input-start-date-jq').get(0);

    if (startDateJq.className === 'start-date-jq warning-border' && valueStartDate === '') {
        startDateJq.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
        return;
    }

    if (valueStartDate == false) {
        return;
    }

    if (valueStartDate > 2020 && startDateJq.className === 'start-date-jq warning-border') {
        startDateJq.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
    }

    if (valueStartDate > 2020) {
        if (startDateJq.className !== 'start-date-jq warning-border') {
            startDateJq.classList.add('warning-border');
            $('<span>Максимальный год поступления 2020!</span>')
                .appendTo('.input-start-date-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (valueStartDate < 1950 && startDateJq.className === 'start-date-jq warning-border') {
        startDateJq.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
    }

    if (valueStartDate < 1950) {
        if (startDateJq.className !== 'start-date-jq warning-border') {
            startDateJq.classList.add('warning-border');
            $('<span>Минимальный год поступления 1950!</span>')
                .appendTo('.input-start-date-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (startDateJq.className === 'start-date-jq warning-border') {
        startDateJq.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
    }
}

function checkAge() {
    let ageJq = $('.age-jq').get(0);
    let valueAge = $('.age-jq').val();
    let inputAge = $('.input-age-jq').get(0);

    if (ageJq.className === 'age-jq warning-border' && valueAge === '') {
        ageJq.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
        return;
    }

    if (valueAge == false) {
        return;
    }

    if (valueAge < 16 && ageJq.className === 'age-jq warning-border') {
        ageJq.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
    }

    if (valueAge < 16) {
        if (ageJq.className !== 'age-jq warning-border') {
            ageJq.classList.add('warning-border');
            $('<span>Минимальный возраст 16 лет!</span>')
                .appendTo('.input-age-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (valueAge > 85 && ageJq.className === 'age-jq warning-border') {
        ageJq.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
    }

    if (valueAge > 85) {
        if (ageJq.className !== 'age-jq warning-border') {
            ageJq.classList.add('warning-border');
            $('<span>Максимальный возраст 85 лет!</span>')
                .appendTo('.input-age-jq')
                .addClass('warning-span');
            return;
        }
        return;
    }

    if (ageJq.className === 'age-jq warning-border') {
        ageJq.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
    }
}

function getValidate() {
    let addBtnJq = $('.add_btn-jq').get(0);
    let inputEndDate = $('.input-end-date-jq').get(0);
    let inputStartDate = $('.input-start-date-jq').get(0);
    let inputAge = $('.input-age-jq').get(0);
    let inputLastName = $('.input-last-name-jq').get(0);
    let inputFirstName = $('.input-first-name-jq').get(0);

    if (
        inputLastName.children[1] ||
        inputFirstName.children[1] ||
        inputEndDate.children[1] ||
        inputStartDate.children[1] ||
        inputAge.children[1]
    ) {
        addBtnJq.setAttribute('disabled', 'disabled');
        addBtnJq.classList.remove('available_add_btn');
        return;
    }

    if ($('.last-name-jq').val() == '') {
        addBtnJq.setAttribute('disabled', 'disabled');
        addBtnJq.classList.remove('available_add_btn');
        return;
    }

    if ($('.first-name-jq').val() == '') {
        addBtnJq.setAttribute('disabled', 'disabled');
        addBtnJq.classList.remove('available_add_btn');
        return;
    }

    if (
        $('.first-name-jq').val() &&
        $('.last-name-jq').val() &&
        $('.start-date-jq').val() &&
        $('.end-date-jq').val() &&
        $('.age-jq').val()
    ) {
        addBtnJq.classList.add('available_add_btn');
        addBtnJq.removeAttribute('disabled');
    }
}

function makeCounter() {
    let currentCount = 1;
    return function () {
        return currentCount++;
    };
}

let counterJq = makeCounter();
let allObjJq = [];

function makeStudTable() {
    let valueLastName = $('.last-name-jq').val();
    let valueFirstName = $('.first-name-jq').val();
    let valueStartDate = $('.start-date-jq').val();
    let valueEndDate = $('.end-date-jq').val();
    let valueAge = $('.age-jq').val();

    let startData = {
        lastName: valueLastName,
        firstName: valueFirstName,
        startDate: valueStartDate,
        endDate: valueEndDate,
        age: valueAge,
    };

    allObjJq.push(startData);

    let k = '<tr>';

    k += `<td>${counterJq()}</td>`;
    k += `<td>${valueLastName}</td>`;
    k += `<td>${valueFirstName}</td>`;
    k += `<td>${valueStartDate}</td>`;
    k += `<td>${valueEndDate}</td>`;
    k += `<td>${valueAge}</td>`;
    k += `<td onClick="editJq(this)">${(document.createElement('img').innerHTML = "<img src='/Users/vderunov/Documents/JavaScript/lesson_20_OOP_Part_2/layout/assets/img/pencil.png'>")}</td>`;
    k += `<td onClick="this.parentNode.parentNode.removeChild(this.parentNode);">${(document.createElement(
        'img',
    ).innerHTML = "<img src='/Users/vderunov/Documents/JavaScript/lesson_20_OOP_Part_2/layout/assets/img/trash.png'>")}</td>`;

    k += '</tr>';

    let studTable = $('.innerStudTable-jq').get(0);
    let newTbody = document.createElement('tr');
    newTbody.innerHTML = k;
    studTable.insertBefore(newTbody, studTable.children[0]);

    document.querySelector('.last-name-jq').value = '';
    document.querySelector('.first-name-jq').value = '';
    document.querySelector('.start-date-jq').value = '';
    document.querySelector('.end-date-jq').value = '';
    document.querySelector('.age-jq').value = '';
}

function editJq(q) {
    if (document.querySelector('.last-name-jq').value) {
        document.querySelector('.last-name-jq').value = '';
    }

    if (document.querySelector('.first-name-jq').value) {
        document.querySelector('.first-name-jq').value = '';
    }

    if (document.querySelector('.start-date-jq').value) {
        document.querySelector('.start-date-jq').value = '';
    }

    if (document.querySelector('.end-date-jq').value) {
        document.querySelector('.end-date-jq').value = '';
    }

    if (document.querySelector('.age-jq').value) {
        document.querySelector('.age-jq').value = '';
    }

    // if ($('.last-name').val()) {
    //     $('.last-name').val() = '';
    // }

    // if ($('.first-name').val()) {
    //     $('.first-name').val() = '';
    // }

    // if ($('.start-date').val()) {
    //     $('.start-date').val() = '';
    // }

    // if ($('.end-date').val()) {
    //     $('.end-date').val() = '';
    // }

    // if ($('.age').val()) {
    //     $('.age').val() = '';
    // }

    document.querySelector('.last-name-jq').value = q.parentNode.children[1].textContent;
    document.querySelector('.first-name-jq').value = q.parentNode.children[2].textContent;
    document.querySelector('.start-date-jq').value = q.parentNode.children[3].textContent;
    document.querySelector('.end-date-jq').value = q.parentNode.children[4].textContent;
    document.querySelector('.age-jq').value = q.parentNode.children[5].textContent;

    // $('.last-name').val() = q.parentNode.children[1].textContent;
    // $('.first-name').val() = q.parentNode.children[2].textContent;
    // $('.start-date').val() = q.parentNode.children[3].textContent;
    // $('.end-date').val() = q.parentNode.children[4].textContent;
    // $('.age').val() = q.parentNode.children[5].textContent;
}