let lastName = document.querySelector('.last-name');
let firstName = document.querySelector('.first-name');
let startDate = document.querySelector('.start-date');
let endDate = document.querySelector('.end-date');
let age = document.querySelector('.age');
let saveBtn = document.querySelector('.save_btn');
let studTable = document.querySelector('.sectionStudTabletable');

lastName.addEventListener('input', checkValue);
firstName.addEventListener('input', checkValue);
startDate.addEventListener('input', checkValue);
endDate.addEventListener('input', checkValue);
age.addEventListener('input', checkValue);

function checkValue() {
    let valueLastName = document.querySelector('.last-name').value;
    let valueFirstName = document.querySelector('.first-name').value;
    let valueStartDate = document.querySelector('.start-date').value;
    let valueEndDate = document.querySelector('.end-date').value;
    let valueAge = document.querySelector('.age').value;

    if (!valueLastName) {
        let valueLastName = false;
    }

    if (!valueFirstName) {
        let valueFirstName = false;
    }

    if (!valueStartDate) {
        let valueStartDate = false;
    }

    if (!valueEndDate) {
        let valueEndDate = false;
    }

    if (!valueAge) {
        let valueAge = false;
    }

    if (
        valueLastName &&
        valueFirstName &&
        valueStartDate &&
        valueEndDate &&
        valueAge
    ) {
        saveBtn.className = 'available_save_btn';
        saveBtn.removeAttribute('disabled');
    }
}

saveBtn.addEventListener('click', addNewStudent);

function addNewStudent() {
    let valueLastName = document.querySelector('.last-name').value;
    let valueFirstName = document.querySelector('.first-name').value;
    let valueStartDate = document.querySelector('.start-date').value;
    let valueEndDate = document.querySelector('.end-date').value;
    let valueAge = document.querySelector('.age').value;

    let allTh = document.querySelectorAll('.stud_th');
    let customTr = document.createElement('tr');

    for (let i = 0; i < allTh.length - 2; i++) {
        let customTd = document.createElement('td');
        customTd.innerHTML = valueLastName;
        studTable.appendChild(customTd);
    }
}

addNewStudent();

// customTr.appendChild(customTd);

// let thId = document.createElement('td');

// function makeId() {
//     let id = 0;
//     return function () {
//         return id++;

//         thId.innerHTML = 'valueLastName'

//     }
// }

// let getId = makeId();

// console.log(getId());
