let lastName = document.querySelector('.last-name');
let firstName = document.querySelector('.first-name');
let endDate = document.querySelector('.end-date');
let startDate = document.querySelector('.start-date');
let age = document.querySelector('.age');
let addBtn = document.querySelector('.add_btn');
let cancelBtn = document.querySelector('.cancel_btn');
let saveBtn = document.querySelector('.save_btn');

lastName.addEventListener('input', checkValueLastName);
firstName.addEventListener('input', checkValueFirstName);
endDate.addEventListener('input', checkEndDate);
startDate.addEventListener('input', checkStartDate);
age.addEventListener('input', checkAge);
addBtn.addEventListener('click', makeStudTable);
cancelBtn.addEventListener('click', clearField);
// saveBtn.addEventListener('click', saveData);

lastName.addEventListener('input', getValidate);
firstName.addEventListener('input', getValidate);
endDate.addEventListener('input', getValidate);
startDate.addEventListener('input', getValidate);
age.addEventListener('input', getValidate);

function clearField() {
    let allWarningBorder = document.querySelectorAll('.warning-border');
    let inputEndDate = document.querySelector('.input-end-date');
    let inputStartDate = document.querySelector('.input-start-date');
    let inputAge = document.querySelector('.input-age');
    let inputLastName = document.querySelector('.input-last-name');
    let inputFirstName = document.querySelector('.input-first-name');

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

// check Last Name

function checkValueLastName() {
    let lastName = document.querySelector('.last-name');
    let inputLastName = document.querySelector('.input-last-name');
    let valueLastName = document.querySelector('.last-name').value;

    if (lastName.className === 'last-name warning-border' && valueLastName === '') {
        lastName.classList.remove('warning-border');
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
            if (lastName.className !== 'last-name warning-border') {
                let span = document.createElement('span');
                span.className = 'warning-span';
                lastName.classList.add('warning-border');
                span.innerHTML = 'Фамилия должна содержать только буквенные символы!';
                inputLastName.appendChild(span);
                return;
            }
            return;
        }
    }

    for (let i = 1; i < valueLastName.length; i++) {
        let check = valueLastName.charCodeAt(i);
        if ((check >= 65 && check <= 90) || (check >= 1040 && check <= 1071)) {
            if (lastName.className !== 'last-name warning-border') {
                let span = document.createElement('span');
                span.className = 'warning-span';
                lastName.classList.add('warning-border');
                span.innerHTML = 'Лишняя заглавная буква в фамилии!';
                inputLastName.appendChild(span);
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
            if (lastName.className !== 'last-name warning-border') {
                let span = document.createElement('span');
                lastName.classList.add('warning-border');
                span.className = 'warning-span';
                span.innerHTML = 'Фамилия должна содержать только буквенные символы!';
                inputLastName.appendChild(span);
                return;
            }
            return;
        }
    }

    if (
        !(valueLastName.charCodeAt(0) >= 65 && valueLastName.charCodeAt(0) <= 90) &&
        !(valueLastName.charCodeAt(0) >= 1040 && valueLastName.charCodeAt(0) <= 1071)
    ) {
        if (lastName.className !== 'last-name warning-border') {
            let span = document.createElement('span');
            lastName.classList.add('warning-border');
            span.className = 'warning-span';
            span.innerHTML = 'Первая буква должна быть заглавной!';
            inputLastName.appendChild(span);
            return;
        }
        return;
    }

    if (lastName.className === 'last-name warning-border') {
        lastName.classList.remove('warning-border');
        inputLastName.removeChild(inputLastName.children[1]);
    }
}

// check First Name

function checkValueFirstName() {
    let firstName = document.querySelector('.first-name');
    let inputFirstName = document.querySelector('.input-first-name');
    let valueFirstName = document.querySelector('.first-name').value;

    if (firstName.className === 'first-name warning-border' && valueFirstName === '') {
        firstName.classList.remove('warning-border');
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
            if (firstName.className !== 'first-name warning-border') {
                let span = document.createElement('span');
                span.className = 'warning-span';
                firstName.classList.add('warning-border');
                span.innerHTML = 'Имя должно содержать только буквенные символы!';
                inputFirstName.appendChild(span);
                return;
            }
            return;
        }
    }

    for (let i = 1; i < valueFirstName.length; i++) {
        let check = valueFirstName.charCodeAt(i);
        if ((check >= 65 && check <= 90) || (check >= 1040 && check <= 1071)) {
            if (firstName.className !== 'first-name warning-border') {
                let span = document.createElement('span');
                span.className = 'warning-span';
                firstName.classList.add('warning-border');
                span.innerHTML = 'Лишняя заглавная буква в имени!';
                inputFirstName.appendChild(span);
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
            if (firstName.className !== 'first-name warning-border') {
                let span = document.createElement('span');
                firstName.classList.add('warning-border');
                span.className = 'warning-span';
                span.innerHTML = 'Имя должно содержать только буквенные символы!';
                inputFirstName.appendChild(span);
                return;
            }
            return;
        }
    }

    if (
        !(valueFirstName.charCodeAt(0) >= 65 && valueFirstName.charCodeAt(0) <= 90) &&
        !(valueFirstName.charCodeAt(0) >= 1040 && valueFirstName.charCodeAt(0) <= 1071)
    ) {
        if (firstName.className !== 'first-name warning-border') {
            let span = document.createElement('span');
            firstName.classList.add('warning-border');
            span.className = 'warning-span';
            span.innerHTML = 'Первая буква должна быть заглавной!';
            inputFirstName.appendChild(span);
            return;
        }
        return;
    }

    if (firstName.className === 'first-name warning-border') {
        firstName.classList.remove('warning-border');
        inputFirstName.removeChild(inputFirstName.children[1]);
    }
}

// check End Date

function checkEndDate() {
    let endDate = document.querySelector('.end-date');
    let valueEndDate = document.querySelector('.end-date').value;
    let inputEndDate = document.querySelector('.input-end-date');
    let valueStartDate = document.querySelector('.start-date').value;

    if (endDate.className === 'end-date warning-border' && valueEndDate === '') {
        endDate.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
        return;
    }

    if (valueEndDate == false) {
        return;
    }

    if (valueEndDate > 2020 && endDate.className === 'end-date warning-border') {
        endDate.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }

    if (valueEndDate > 2020) {
        if (endDate.className !== 'end-date warning-border') {
            let span = document.createElement('span');
            span.className = 'warning-span';
            endDate.classList.add('warning-border');
            span.innerHTML = 'Максимальный год окончания 2020!';
            inputEndDate.appendChild(span);
            return;
        }
        return;
    }

    if (valueEndDate < 1950 && endDate.className === 'end-date warning-border') {
        endDate.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }

    if (valueEndDate < 1950) {
        if (endDate.className !== 'end-date warning-border') {
            let span = document.createElement('span');
            span.className = 'warning-span';
            endDate.classList.add('warning-border');
            span.innerHTML = 'Минимальный год окончания 1950!';
            inputEndDate.appendChild(span);
            return;
        }
        return;
    }

    if (valueEndDate < valueStartDate && endDate.className === 'end-date warning-border') {
        endDate.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }

    if (valueEndDate < valueStartDate) {
        if (endDate.className !== 'end-date warning-border') {
            let span = document.createElement('span');
            span.className = 'warning-span';
            endDate.classList.add('warning-border');
            span.innerHTML = 'Дата окончания меньше даты поступления!';
            inputEndDate.appendChild(span);
            return;
        }
        return;
    }

    if (endDate.className === 'end-date warning-border') {
        endDate.classList.remove('warning-border');
        inputEndDate.removeChild(inputEndDate.children[1]);
    }
}

// check Start Date

function checkStartDate() {
    let startDate = document.querySelector('.start-date');
    let valueStartDate = document.querySelector('.start-date').value;
    let inputStartDate = document.querySelector('.input-start-date');

    if (startDate.className === 'start-date warning-border' && valueStartDate === '') {
        startDate.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
        return;
    }

    if (valueStartDate == false) {
        return;
    }

    if (valueStartDate > 2020 && startDate.className === 'start-date warning-border') {
        startDate.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
    }

    if (valueStartDate > 2020) {
        if (startDate.className !== 'start-date warning-border') {
            let span = document.createElement('span');
            span.className = 'warning-span';
            startDate.classList.add('warning-border');
            span.innerHTML = 'Максимальный год поступления 2020!';
            inputStartDate.appendChild(span);
            return;
        }
        return;
    }

    if (valueStartDate < 1950 && startDate.className === 'start-date warning-border') {
        startDate.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
    }

    if (valueStartDate < 1950) {
        if (startDate.className !== 'start-date warning-border') {
            let span = document.createElement('span');
            span.className = 'warning-span';
            startDate.classList.add('warning-border');
            span.innerHTML = 'Минимальный год поступления 1950!';
            inputStartDate.appendChild(span);
            return;
        }
        return;
    }

    if (startDate.className === 'start-date warning-border') {
        startDate.classList.remove('warning-border');
        inputStartDate.removeChild(inputStartDate.children[1]);
    }
}

// check Age

function checkAge() {
    let age = document.querySelector('.age');
    let valueAge = document.querySelector('.age').value;
    let inputAge = document.querySelector('.input-age');

    if (age.className === 'age warning-border' && valueAge === '') {
        age.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
        return;
    }

    if (valueAge == false) {
        return;
    }

    if (valueAge < 16 && age.className === 'age warning-border') {
        age.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
    }

    if (valueAge < 16) {
        if (age.className !== 'age warning-border') {
            let span = document.createElement('span');
            span.className = 'warning-span';
            age.classList.add('warning-border');
            span.innerHTML = 'Минимальный возраст 16 лет!';
            inputAge.appendChild(span);
            return;
        }
        return;
    }

    if (valueAge > 85 && age.className === 'age warning-border') {
        age.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
    }

    if (valueAge > 85) {
        if (age.className !== 'age warning-border') {
            let span = document.createElement('span');
            span.className = 'warning-span';
            age.classList.add('warning-border');
            span.innerHTML = 'Максимальный возраст 85 лет!';
            inputAge.appendChild(span);
            return;
        }
        return;
    }

    if (age.className === 'age warning-border') {
        age.classList.remove('warning-border');
        inputAge.removeChild(inputAge.children[1]);
    }
}

function getValidate() {
    let addBtn = document.querySelector('.add_btn');
    let inputEndDate = document.querySelector('.input-end-date');
    let inputStartDate = document.querySelector('.input-start-date');
    let inputAge = document.querySelector('.input-age');
    let inputLastName = document.querySelector('.input-last-name');
    let inputFirstName = document.querySelector('.input-first-name');

    if (
        inputLastName.children[1] ||
        inputFirstName.children[1] ||
        inputEndDate.children[1] ||
        inputStartDate.children[1] ||
        inputAge.children[1]
    ) {
        addBtn.setAttribute('disabled', 'disabled');
        addBtn.classList.remove('available_add_btn');
        return;
    }

    if (document.querySelector('.last-name').value == "") {
        addBtn.setAttribute('disabled', 'disabled');
        addBtn.classList.remove('available_add_btn');
        return;
    }

    if (document.querySelector('.first-name').value == "") {
        addBtn.setAttribute('disabled', 'disabled');
        addBtn.classList.remove('available_add_btn');
        return;
    }

    if (
        document.querySelector('.last-name').value &&
        document.querySelector('.first-name').value &&
        document.querySelector('.start-date').value &&
        document.querySelector('.end-date').value &&
        document.querySelector('.age').value
    ) {
        addBtn.classList.add('available_add_btn');
        addBtn.removeAttribute('disabled');
    }
}

function makeCounter() {
    let currentCount = 1;
    return function () {
        return currentCount++;
    };
}

let counter = makeCounter();

function makeStudTable() {
    let valueLastName = document.querySelector('.last-name').value;
    let valueFirstName = document.querySelector('.first-name').value;
    let valueStartDate = document.querySelector('.start-date').value;
    let valueEndDate = document.querySelector('.end-date').value;
    let valueAge = document.querySelector('.age').value;

    let startData = {
        lastName: valueLastName,
        firstName: valueFirstName,
        startDate: valueStartDate,
        endDate: valueEndDate,
        age: valueAge,
    };

    let allObj = [];
    allObj.push(startData);

    document.addEventListener('DOMContentLoaded', readyEdit);

    function readyEdit() {
        let editImg = document.createElement('img');
        editImg.className = 'cursor-pointer';
        return (editImg.innerHTML = "<img src='/Users/vderunov/Documents/JavaScript/lesson_20_OOP_Part_2/layout/assets/img/pencil.png'>");
    }

    document.addEventListener('DOMContentLoaded', readyTrash);

    function readyTrash() {
        let trashImg = document.createElement('img');
        return (trashImg.innerHTML = "<img src='/Users/vderunov/Documents/JavaScript/lesson_20_OOP_Part_2/layout/assets/img/trash.png'>");
    }

    let k = '<tr>';

    for (let i = 0; i < allObj.length; i++) {
        k += `<td>${counter()}</td>`;
        k += `<td>${allObj[i].lastName}</td>`;
        k += `<td>${allObj[i].firstName}</td>`;
        k += `<td>${allObj[i].startDate}</td>`;
        k += `<td>${allObj[i].endDate}</td>`;
        k += `<td>${allObj[i].age}</td>`;
        k += `<td onClick="edit(this)">${readyEdit()}</td>`;
        k += `<td onClick="this.parentNode.parentNode.removeChild(this.parentNode);">${readyTrash()}</td>`;
    }
    k += '</tr>';

    let studTable = document.querySelector('.innerStudTable');
    let newTbody = document.createElement('tr');
    newTbody.innerHTML = k;
    studTable.insertBefore(newTbody, studTable.children[0]);
}

function edit(q) {

    if (document.querySelector('.last-name').value) {
        document.querySelector('.last-name').value = "";
    }

    if (document.querySelector('.first-name').value) {
        document.querySelector('.first-name').value = "";
    }

    if (document.querySelector('.start-date').value) {
        document.querySelector('.start-date').value = "";
    }

    if (document.querySelector('.end-date').value) {
        document.querySelector('.end-date').value = "";
    }

    if (document.querySelector('.age').value) {
        document.querySelector('.age').value = "";
    }

    document.querySelector('.last-name').value = q.parentNode.children[1].textContent;
    document.querySelector('.first-name').value = q.parentNode.children[2].textContent;
    document.querySelector('.start-date').value = q.parentNode.children[3].textContent;
    document.querySelector('.end-date').value = q.parentNode.children[4].textContent;
    document.querySelector('.age').value = q.parentNode.children[5].textContent;
}

// function saveData() {



// }