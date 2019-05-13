function Slider() {
    this.sliderInf = document.querySelector('.section_infinity_slider');
    this.sliderModern = document.querySelector('.section_modern_slider');
    this.initInfSlider();
    this.initModernSlider();
    this.carousel(this.buttonsModernSlider, this.dotsModernSlider);
    autoSlider(this.wrapperInfSlider, this.slidesInfSlider, this.slideInfSlider, 2000);
    move(this.slideModernSlider, this.wrapperModernSlider);
    jump(this.slidesModernSlider, this.slideModernSlider, this.wrapperModernSlider);
    jumpDots(this.slidesModernSlider, this.slideModernSlider, this.wrapperModernSlider);
    moveDots(this.dotsModernSlider);
    this.wrapperModernSlider.addEventListener('mouseover', showNameSliderTwo.bind(null, this.sliderModern));
    this.wrapperModernSlider.addEventListener('mouseout', delShowNameSliderTwo.bind(null, this.sliderModern));
    this.wrapperModernSlider.addEventListener('mouseover', showNameSlider);
    this.wrapperInfSlider.addEventListener('mouseover', stopSlider);
    // this.wrapperInfSlider.addEventListener('mouseover', runSlider.bind(null, this.initInfSlider));
}

Slider.prototype.initInfSlider = function() {
    this.wrapperInfSlider = this.sliderInf.querySelector('.slider-wrapper');
    this.slidesInfSlider = this.sliderInf.querySelectorAll('.slide');
    this.slideInfSlider = this.sliderInf.querySelector('.slide');
};

Slider.prototype.initModernSlider = function() {
    this.wrapperModernSlider = this.sliderModern.querySelector('.slider-wrapper');
    this.slidesModernSlider = this.sliderModern.querySelectorAll('.slide');
    this.slideModernSlider = this.sliderModern.querySelector('.slide');
    this.buttonsModernSlider = this.sliderModern.querySelectorAll('.slide-btn');
    this.dotsModernSlider = this.sliderModern.querySelectorAll('.slider__dot');
    this.sectionInfSliderol = this.sliderModern.querySelector('.sectionInfSliderol');
};

function autoSlider(wrapper, slides, slide, timeout) {
    let index = 0;
    let max = slides.length;
    let size = slide.clientWidth;
    timerIdWrapper = setInterval(() => {
        wrapper.style.transition = 'transform .5s ease-in-out';
        index >= max - 1 ? false : index++;
        wrapper.style.transform = `translateX(${-index * size}px)`;
        wrapper.addEventListener('transitionend', () => {
            slides[index].id === 'firstClone' ? (index = 1) : index;
            wrapper.style.transition = 'none';
            wrapper.style.transform = `translateX(${-index * size}px)`;
        });
    }, timeout);
}

function showNameSliderTwo(sectionInfSliderol) {
    let div = document.createElement('div');
    let namePlane = event.target.getAttribute('data-about');
    div.className = 'name-slider';
    div.innerHTML = namePlane;
    sectionInfSliderol.appendChild(div);
}

function delShowNameSliderTwo(sectionInfSliderol) {
    sectionInfSliderol.removeChild(sectionInfSliderol.children[3]);
}

function showNameSlider() {
    if (event.currentTarget.className === 'slider-wrapper slider-wrapper-second') {
        let namePlane = event.target.getAttribute('data-about');
        event.target.setAttribute('title', namePlane);
    }
}

//---------------------------------------

function stopSlider() {
    if (event.currentTarget.className === 'slider-wrapper slider-wrapper-first') {
        clearInterval(timerIdWrapper);
    }
}

// function runSlider() {
//     if (event.currentTarget.className === 'slider-wrapper slider-wrapper-first') {
//         event.type == 'mouseout';
//         timerIdWrapper = setInterval(autoSlider);
//     }
// }

//---------------------------------------

function move(slideModernSlider, wrapperModernSlider) {
    let size = slideModernSlider.clientWidth;
    this.index = 0;
    wrapperModernSlider.style.transform = `translateX(${-this.index * size}px)`;
}

Slider.prototype.carousel = function(buttonsModernSlider, dotsModernSlider) {
    let max = buttonsModernSlider.length;
    let maxDots = dotsModernSlider.length;

    for (let i = 0; i < max; i += 1) {
        buttonsModernSlider[i].addEventListener('click', Slider[buttonsModernSlider[i].id].bind(null, this));
    }

    for (let i = 0; i < maxDots; i++) {
        dotsModernSlider[i].addEventListener('click', Slider[dotsModernSlider[i].id].bind(null, this));
    }
};

Slider.ol_move = function(box) {
    let max = box.slidesModernSlider.length;
    let size = box.slideModernSlider.clientWidth;
    box.wrapperModernSlider.style.transition = 'transform .5s ease-in-out';
    index >= max - 1 ? false : index++;
    box.wrapperModernSlider.style.transform = `translateX(${-index * size}px)`;
    jump(box.slidesModernSlider, box.slideModernSlider, box.wrapperModernSlider);
    moveDots(box.dotsModernSlider);
    jumpDots(box.slidesModernSlider, box.slideModernSlider, box.wrapperModernSlider);
};

Slider.next = function(box) {
    let max = box.slidesModernSlider.length;
    let size = box.slideModernSlider.clientWidth;
    box.wrapperModernSlider.style.transition = 'transform .5s ease-in-out';
    index >= max - 1 ? false : index++;
    box.wrapperModernSlider.style.transform = `translateX(${-index * size}px)`;
    jump(box.slidesModernSlider, box.slideModernSlider, box.wrapperModernSlider);
    moveDots(box.dotsModernSlider);
    jumpDots(box.slidesModernSlider, box.slideModernSlider, box.wrapperModernSlider);
};

Slider.prev = function(box) {
    let size = box.slideModernSlider.clientWidth;
    box.wrapperModernSlider.style.transition = 'transform .5s ease-in-out';
    index <= 0 ? false : index--;
    box.wrapperModernSlider.style.transform = `translateX(${-index * size}px)`;
    jump(box.slidesModernSlider, box.slideModernSlider, box.wrapperModernSlider);
    moveDots(box.dotsModernSlider);
    jumpDots(box.slideModernSlider, box.wrapperModernSlider, box.slidesModernSlider);
};

function jump(slidesModernSlider, slideModernSlider, wrapperModernSlider) {
    let size = slideModernSlider.clientWidth;
    wrapperModernSlider.addEventListener('transitionend', () => {
        slidesModernSlider[index].id === 'firstClone' ? (index = 1) : index;
        slidesModernSlider[index].id === 'lastClone' ? (index = slidesModernSlider.length - 2) : index;
        wrapperModernSlider.style.transition = 'none';
        wrapperModernSlider.style.transform = `translateX(${-index * size}px)`;
    });
}

function jumpDots(slidesModernSlider, slideModernSlider, wrapperModernSlider) {
    let size = slideModernSlider.clientWidth;
    wrapperModernSlider.addEventListener('transitionend', () => {
        slidesModernSlider[index].id === 'firstClone' ? (index = 1) : index;
        slidesModernSlider[index].id === 'lastClone' ? (index = slidesModernSlider.length - 2) : index;
        wrapperModernSlider.style.transition = 'none';
        wrapperModernSlider.style.transform = `translateX(${-index * size}px)`;
    });
}

function moveDots(dotsModernSlider) {
    for (let i = 0; i < dotsModernSlider.length; i += 1) {
        if ([i] == index) {
            dotsModernSlider[i].classList.add('active');
        } else {
            dotsModernSlider[i].classList.remove('active');
        }
    }
}

let sliderInfinity = new Slider();

//---------------------------------------

// function SliderInfinity(elem) {
//     this.elem = document.querySelector(elem);
//     this.init();
//     autoSlider(this.wrapper, this.slides, this.slide, 2000);
// }

// SliderInfinity.prototype.init = function () {
//     this.wrapper = this.elem.querySelector('.slider-wrapper');
//     this.slides = this.elem.querySelectorAll('.slide');
//     this.slide = this.elem.querySelector('.slide');
//     this.buttons = this.elem.querySelectorAll('.slide-btn');
//     this.wrapper.addEventListener('mouseover', stopSlider);
//     // this.wrapper.addEventListener('mouseout', runSlider);
// };

// function autoSlider(wrapper, slides, slide, timeout) {
//     let index = 0;
//     let max = slides.length;
//     let size = slide.clientWidth;
//     this.timerIdWrapper = setInterval(() => {
//         wrapper.style.transition = 'transform .3s ease-in-out';
//         index >= max - 1 ? false : index++;
//         wrapper.style.transform = `translateX(${-index * size}px)`;
//         wrapper.addEventListener('transitionend', () => {
//             slides[index].id === 'firstClone' ? (index = 1) : index;
//             wrapper.style.transition = 'none';
//             wrapper.style.transform = `translateX(${-index * size}px)`;
//         });
//     }, timeout);
// }

//---------------------------------------

// function stopSlider() {
//     if (event.currentTarget.className === 'slider-wrapper slider-wrapper-first') {
//         clearInterval(timerIdWrapper);
//     }
// }

// // function runSlider() {
// //     if (event.currentTarget.className === 'slider-wrapper stop-slider') {
// //         event.type == 'mouseout';
// //         timerIdWrapper = setInterval(autoSlider);
// //     }
// // }

//---------------------------------------

// function SliderUsual(elem) {
//     this.elem = document.querySelector(elem);
//     this.sliderDots = document.querySelectorAll('.slider__dot');
//     this.init();
//     this.move();
//     this.carousel();
//     this.moveDots();
//     this.wrapper.addEventListener('mouseover', showNameSlider);
// }

// SliderUsual.prototype = Object.create(SliderInfinity.prototype);
// SliderUsual.prototype.letructor = SliderUsual;

// SliderUsual.prototype.move = function () {
//     let size = this.slide.clientWidth;
//     this.index = 0;
//     this.wrapper.style.transform = `translateX(${-this.index * size}px)`;
// };

// SliderUsual.prototype.carousel = function () {
//     let me = this;
//     let max = this.buttons.length;
//     let maxDots = this.sliderDots.length;

//     for (let i = 0; i < max; i += 1) {
//         me.buttons[i].addEventListener('click', SliderUsual[me.buttons[i].id].bind(null, me));
//     }

//     for (let i = 0; i < maxDots; i++) {
//         me.sliderDots[i].addEventListener('click', SliderUsual[me.sliderDots[i].id].bind(null, me));
//     }
// };

// SliderUsual.ol_move = function (box) {
//     let max = box.slides.length;
//     let size = box.slide.clientWidth;
//     box.wrapper.style.transition = 'transform .3s ease-in-out';
//     box.index >= max - 1 ? false : box.index++;
//     box.wrapper.style.transform = `translateX(${-box.index * size}px)`;
//     box.jump();
//     box.moveDots();
//     box.jumpDots();
// };

// SliderUsual.prev = function (box) {
//     let size = box.slide.clientWidth;
//     box.wrapper.style.transition = 'transform .3s ease-in-out';
//     box.index <= 0 ? false : box.index--;
//     box.wrapper.style.transform = `translateX(${-box.index * size}px)`;
//     box.jump();
//     box.moveDots();
//     box.jumpDots();
// };

// SliderUsual.next = function (box) {
//     let max = box.slides.length;
//     let size = box.slide.clientWidth;
//     box.wrapper.style.transition = 'transform .3s ease-in-out';
//     box.index >= max - 1 ? false : box.index++;
//     box.wrapper.style.transform = `translateX(${-box.index * size}px)`;
//     box.jump();
//     box.moveDots();
//     box.jumpDots();
// };

// SliderUsual.prototype.jumpDots = function () {
//     let me = this;
//     let size = me.slide.clientWidth;
//     me.wrapper.addEventListener('transitionend', () => {
//         me.slides[me.index].id === 'firstClone' ? (me.index = 1) : me.index;
//         me.slides[me.index].id === 'lastClone' ? (me.index = me.slides.length - 2) : me.index;
//         me.wrapper.style.transition = 'none';
//         me.wrapper.style.transform = `translateX(${-me.index * size}px)`;
//     });
// };

// SliderUsual.prototype.jump = function () {
//     let me = this;
//     let size = me.slide.clientWidth;
//     me.wrapper.addEventListener('transitionend', () => {
//         me.slides[me.index].id === 'firstClone' ? (me.index = 1) : me.index;
//         me.slides[me.index].id === 'lastClone' ? (me.index = me.slides.length - 2) : me.index;
//         me.wrapper.style.transition = 'none';
//         me.wrapper.style.transform = `translateX(${-me.index * size}px)`;
//     });
// };

// SliderUsual.prototype.moveDots = function () {
//     for (let i = 0; i < this.sliderDots.length; i++) {
//         if ([i] == this.index) {
//             this.sliderDots[i].classList.add('active');
//         } else {
//             this.sliderDots[i].classList.remove('active');
//         }
//     }
// };

// function showNameSlider() {
//     if (event.currentTarget.className === 'slider-wrapper slider-wrapper-second') {
//         let namePlane = event.target.getAttribute('data-about');
//         event.target.setAttribute('title', namePlane);
//     }
// }

// sliderInfinity = new SliderInfinity('#main-slider');
// sliderUsual = new SliderUsual('#usual-slider');
