let linkButtons = document.getElementById('link_buttons');
let sectionSlider = document.getElementById('section_slider');
let linkSlider = document.getElementById('link_slider');
let sectionButtons = document.getElementById('section_buttons');
let linkTable = document.getElementById('link_table');
let sectionTable = document.getElementById('section_table');
let linkStudTable = document.getElementById('link_stud_table');
let sectionStudTable = document.getElementById('section_stud_table');

function changeSectionSlider() {
    if (sectionSlider.className === 'display_none');
    sectionSlider.className = 'display_block';
    sectionButtons.className = 'display_none';
    sectionTable.className = 'display_none';
    sectionStudTable.className = 'display_none';
}

function changeSectionButtons() {
    if (sectionButtons.className === 'display_none');
    sectionButtons.className = 'display_block';
    sectionTable.className = 'display_none';
    sectionSlider.className = 'display_none';
    sectionStudTable.className = 'display_none';
}

function changeSectionTable() {
    if (sectionTable.className === 'display_none');
    sectionTable.className = 'display_block';
    sectionButtons.className = 'display_none';
    sectionSlider.className = 'display_none';
    sectionStudTable.className = 'display_none';
}

function changeSectionStudTable() {
    if (sectionStudTable.className === 'display_none');
    sectionStudTable.className = 'display_block';
    sectionButtons.className = 'display_none';
    sectionTable.className = 'display_none';
    sectionSlider.className = 'display_none';
}

linkSlider.addEventListener('click', changeSectionSlider);
linkButtons.addEventListener('click', changeSectionButtons);
linkTable.addEventListener('click', changeSectionTable);
linkStudTable.addEventListener('click', changeSectionStudTable);
