let progressValue = document.querySelector('.progress-value');
let btnPromise = document.querySelectorAll('.btn-promise');
let images = document.querySelectorAll('.img-promise');
let headers = document.querySelectorAll('.h1-promise');
let articles = document.querySelectorAll('.article-promise');
let buttons = document.querySelector('.buttons');
let promise = new Promise(resolve => {
    resolve(buttons.addEventListener('click', choiceButton));
});

progressValue.addEventListener('animationend', () => {
    for (let i = 0; i < btnPromise.length; i++) {
        btnPromise[i].removeAttribute('disabled');
        btnPromise[i].classList.add('btn-promise-on');
    }
});

function choiceButton(event) {
    if (event.target.id === 'btn-one') {
        queue(true);
    } else if (event.target.id === 'btn-two') {
        queue(false);
    }
}

function hideElement(element) {
    element.style.width = '0px';
    element.style.fontSize = '0px';
}

function hideElements(elements) {
    for (let i = 0; i < elements.length; i++) {
        hideElement(elements[i]);
    }
}

function showElement(element) {
    element.style.width = '700px';
    element.style.fontSize = '16px';
}

function showElements(elements) {
    for (let i = 0; i < elements.length; i++) {
        showElement(elements[i]);
    }
}

function showImg(element) {
    element.style.width = '150px';
}

function showImgs(elements) {
    for (let i = 0; i < elements.length; i++) {
        showImg(elements[i]);
    }
}

function queue(toggle) {
    let elements = toggle ? 1 : images.length;
    for (let i = 0; i < elements; i++) {
        promise
            .then(() => {
                event.stopPropagation();
                if (!toggle) {
                    hideElement(images[i]);
                } else {
                    hideElements(images);
                }
            })
            .then(() => {
                images[i].addEventListener('transitionend', event => {
                    event.stopPropagation();
                    if (!toggle) {
                        hideElement(headers[i]);
                    } else {
                        hideElements(headers);
                    }
                });
            })
            .then(() => {
                headers[i].addEventListener('transitionend', event => {
                    event.stopPropagation();
                    if (!toggle) {
                        hideElement(articles[i]);
                    } else {
                        hideElements(articles);
                    }
                });
            })
            .then(() => {
                articles[i].addEventListener('transitionend', event => {
                    event.stopPropagation();
                    if (!toggle) {
                        showElement(articles[i]);
                        showElement(headers[i]);
                        showImg(images[i]);
                    } else {
                        showElements(headers);
                        showElements(articles);
                        showImgs(images);
                    }
                });
            });
    }
}
