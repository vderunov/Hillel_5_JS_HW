let linkButtons = document.getElementById('link_buttons');
let sectionButtons = document.getElementById('section_buttons');
let sectionInfSlider = document.getElementById('section_infinity_slider');
let linkInfSlider = document.getElementById('link_infinity_slider');
let sectionModernSlider = document.getElementById('section_modern_slider');
let linkModernSlider = document.getElementById('link_modern_slider');
let linkTable = document.getElementById('link_table');
let sectionTable = document.getElementById('section_table');
let linkStudTable = document.getElementById('link_stud_table');
let sectionStudTable = document.getElementById('section_stud_table');

function changeSectionInfSlider() {
    if (sectionInfSlider.className === 'display_none');
    sectionInfSlider.className = 'display_block';
    sectionButtons.className = 'display_none';
    sectionTable.className = 'display_none';
    sectionStudTable.className = 'display_none';
    sectionModernSlider.className = 'display_none';
}

function changeSectionModernSlider() {
    if (sectionModernSlider.className === 'display_none');
    sectionModernSlider.className = 'display_block';
    sectionInfSlider.className = 'display_none';
    sectionButtons.className = 'display_none';
    sectionTable.className = 'display_none';
    sectionStudTable.className = 'display_none';
}

function changeSectionButtons() {
    if (sectionButtons.className === 'display_none');
    sectionButtons.className = 'display_block';
    sectionTable.className = 'display_none';
    sectionInfSlider.className = 'display_none';
    sectionStudTable.className = 'display_none';
    sectionModernSlider.className = 'display_none';
}

function changeSectionTable() {
    if (sectionTable.className === 'display_none');
    sectionTable.className = 'display_block';
    sectionButtons.className = 'display_none';
    sectionInfSlider.className = 'display_none';
    sectionStudTable.className = 'display_none';
    sectionModernSlider.className = 'display_none';
}

function changeSectionStudTable() {
    if (sectionStudTable.className === 'display_none');
    sectionStudTable.className = 'display_block';
    sectionButtons.className = 'display_none';
    sectionTable.className = 'display_none';
    sectionInfSlider.className = 'display_none';
    sectionModernSlider.className = 'display_none';
}

linkInfSlider.addEventListener('click', changeSectionInfSlider);
linkModernSlider.addEventListener('click', changeSectionModernSlider);
linkStudTable.addEventListener('click', changeSectionStudTable);
linkButtons.addEventListener('click', changeSectionButtons);
linkTable.addEventListener('click', changeSectionTable);
linkStudTable.addEventListener('click', changeSectionStudTable);