let mainTable = document.getElementById('main-table');
let submit = document.getElementById('submit');
let fieldset = document.getElementById('fieldset');
let customTable = document.createElement('table');
let customDiv = document.createElement('div');

submit.addEventListener('click', checkValue);

function checkValue() {

    let rows = document.getElementById("tableLines").value;
    let cell = document.getElementById("tableСolumns").value;

    if (mainTable.children[0]) {
        mainTable.removeChild(mainTable.children[0]);
        mainTable.appendChild(customTable);
    } else {
        mainTable.appendChild(customTable);
    }

    if (mainTable.children[0]) {
        mainTable.removeChild(mainTable.children[0]);
    }

    if (fieldset.className = 'maxValue_Warning') {
        fieldset.classList.remove('maxValue_Warning');
    }

    if (rows > 25 || cell > 25) {
        let maxValue = document.createElement('div');
        maxValue.className = 'maxValue_Warning';
        fieldset.className = 'maxValue_Warning';
        maxValue.innerHTML = '<span>Максимально допустимое значение 25!</span>';
        mainTable.appendChild(maxValue);
        return;
    }

    if (isNaN(rows) || isNaN(cell)) {
        let notNumber = document.createElement('div');
        notNumber.className = 'fieldset_Warning';
        fieldset.className = 'fieldset_Warning';
        notNumber.innerHTML = '<span>Вы ввели не число!</span>'
        mainTable.appendChild(notNumber);
        return;
    } else {
        makeTable();
    }
};

function makeTable() {

    let rows = document.getElementById("tableLines").value;
    let cell = document.getElementById("tableСolumns").value;
    let customTable = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let customTr = document.createElement('tr');
        for (let k = 0; k < cell; k++) {
            let customTd = document.createElement('td');
            customTr.appendChild(customTd);
        }
        customTable.appendChild(customTr);
        mainTable.appendChild(customTable);
        customTable.className = 'section_table_table';
    }
};

// title attribute

mainTable.addEventListener('click', makeColor);

function makeColor() {
    if (event.target.tagName != 'TD') {
        return;
    }
    getCellIndex(event.target);
}

function getCellIndex(elem) {
    let cellIndex = "Cell index is: " + elem.cellIndex;
    elem.setAttribute('title', cellIndex);
}