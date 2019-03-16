let myButton = document.querySelectorAll('#my_button');

for (let i = 0; i < myButton.length; i++) {
    myButton[i].addEventListener('click', clickMe);
}

function clickMe() {
    if (event.target.className === 'my_btn_red') {
        event.target.className = 'my_btn';
    } else {
        event.target.className = 'my_btn_red';
    }
}
