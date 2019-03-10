let link_buttons_ = document.getElementById('link_buttons');
let section_home_ = document.getElementById('section_home');
let link_home_ = document.getElementById('link_home');
let section_buttons_ = document.getElementById('section_buttons');
let link_table_ = document.getElementById('link_table');
let section_table_ = document.getElementById('section_table');
let link_slider_ = document.getElementById('link_slider');
let section_slider_ = document.getElementById('section_slider');
let link_stud_table_ = document.getElementById('link_stud_table');
let section_stud_table_ = document.getElementById('section_stud_table');

link_home_.addEventListener('click', changeSectionHome);
link_buttons_.addEventListener('click', changeSectionButtons);
link_table_.addEventListener('click', changeSectionTable);
link_slider_.addEventListener('click', changeSectionSlider);
link_stud_table_.addEventListener('click', changeSectionStudTable);

function changeSectionHome() {
    if (section_home_.className === 'display_none');
    section_home_.className = 'display_block';
    section_buttons_.className = 'display_none'
    section_table_.className = 'display_none'
    section_slider_.className = 'display_none'
    section_stud_table_.className = 'display_none'
}

function changeSectionButtons() {
    if (section_buttons_.className === 'display_none');
    section_buttons_.className = 'display_block';
    section_home_.className = 'display_none';
    section_table_.className = 'display_none'
    section_slider_.className = 'display_none'
    section_stud_table_.className = 'display_none'
}

function changeSectionTable() {
    if (section_table_.className === 'display_none');
    section_table_.className = 'display_block';
    section_home_.className = 'display_none'
    section_buttons_.className = 'display_none'
    section_slider_.className = 'display_none'
    section_stud_table_.className = 'display_none'
}

function changeSectionSlider() {
    if (section_slider_.className === 'display_none');
    section_slider_.className = 'display_block';
    section_home_.className = 'display_none'
    section_buttons_.className = 'display_none'
    section_table_.className = 'display_none';
    section_stud_table_.className = 'display_none'
}

function changeSectionStudTable() {
    if (section_stud_table_.className === 'display_none');
    section_stud_table_.className = 'display_block';
    section_home_.className = 'display_none'
    section_buttons_.className = 'display_none'
    section_table_.className = 'display_none';
    section_slider_.className = 'display_none';
}