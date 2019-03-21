let saveBtn = document.querySelector('.save_btn');
let addBtn = document.querySelector('.add_btn');

addBtn.addEventListener('click', getValue);

function getValue() {
    let allObj = [];
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

    allObj.push(startData);

    function makeCounter() {
        let currentCount = 1;
        return function () {
            return currentCount++;
        };
    }

    let counter = makeCounter();

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
        k += `<td>${readyEdit()}</td>`;
        k += `<td>${readyTrash()}</td>`;
    }
    k += '</tr>';

    let studTable = document.querySelector('.innerStudTable');
    let newTbody = document.createElement('tr');
    newTbody.innerHTML = k;
    studTable.insertBefore(newTbody, studTable.children[0]);
}

// var complexFunction = function (arg1, arg2) {
//     return arg1 + arg2;
// };

// function cache(complexFunction) {
//     var objCache = {};

//     return function () {
//         var n = [].slice.call(arguments);

//         if (n in objCache) {
//             return objCache[n];
//         }

//         objCache[n] = complexFunction.apply(this, arguments);
//         return objCache[n];
//     };
// };

// var cachedFunction = cache(complexFunction);

// console.log(cachedFunction("foo", "bar"));

// lastName.addEventListener('input', checkValue);
// firstName.addEventListener('input', checkValue);
// startDate.addEventListener('input', checkValue);
// endDate.addEventListener('input', checkValue);
// age.addEventListener('input', checkValue);

// function checkValue() {
//     let valueLastName = document.querySelector('.last-name').value;
//     let valueFirstName = document.querySelector('.first-name').value;
//     let valueStartDate = document.querySelector('.start-date').value;
//     let valueEndDate = document.querySelector('.end-date').value;
//     let valueAge = document.querySelector('.age').value;

//     if (!valueLastName) {
//         let valueLastName = false;
//     }

//     if (!valueFirstName) {
//         let valueFirstName = false;
//     }

//     if (!valueStartDate) {
//         let valueStartDate = false;
//     }

//     if (!valueEndDate) {
//         let valueEndDate = false;
//     }

//     if (!valueAge) {
//         let valueAge = false;
//     }

//     if (
//         valueLastName &&
//         valueFirstName &&
//         valueStartDate &&
//         valueEndDate &&
//         valueAge
//     ) {
//         saveBtn.className = 'available_save_btn';
//         saveBtn.removeAttribute('disabled');
//     }
// }

// saveBtn.addEventListener('click', addNewStudent);

// function addNewStudent() {
//     let valueLastName = document.querySelector('.last-name').value;
//     let valueFirstName = document.querySelector('.first-name').value;
//     let valueStartDate = document.querySelector('.start-date').value;
//     let valueEndDate = document.querySelector('.end-date').value;
//     let valueAge = document.querySelector('.age').value;

//     let allTh = document.querySelectorAll('.stud_th');
//     let customTr = document.createElement('tr');

//     for (let i = 0; i < allTh.length - 2; i++) {
//         let customTd = document.createElement('td');
//         customTd.innerHTML = valueLastName;
//         studTable.appendChild(customTd);
//     }
// }

// addNewStudent();