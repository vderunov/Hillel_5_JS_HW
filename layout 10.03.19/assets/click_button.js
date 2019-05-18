const myButtons = document.querySelectorAll('.my_button');

for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', handler);
}

function handler() {
    event.target.classList.toggle('my_btn_red');
}
