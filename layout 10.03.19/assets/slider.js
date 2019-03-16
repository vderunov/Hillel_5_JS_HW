function SliderInfinity(elem) {
    this.elem = document.querySelector(elem);
    this.init();
    autoSlider(this.wrapper, this.slides, this.slide, 2000);
}

SliderInfinity.prototype.init = function() {
    this.wrapper = this.elem.querySelector('.slider-wrapper');
    this.slides = this.elem.querySelectorAll('.slide');
    this.slide = this.elem.querySelector('.slide');
    this.buttons = this.elem.querySelectorAll('.slide-btn');
    this.wrapper.addEventListener('mouseover', stopSlider);
    // this.wrapper.addEventListener('mouseout', runSlider);
};

function autoSlider(wrapper, slides, slide, timeout) {
    let index = 0;
    let max = slides.length;
    let size = slide.clientWidth;
    this.timerIdWrapper = setInterval(() => {
        wrapper.style.transition = 'transform .3s ease-in-out';
        index >= max - 1 ? false : index++;
        wrapper.style.transform = `translateX(${-index * size}px)`;
        wrapper.addEventListener('transitionend', () => {
            slides[index].id === 'firstClone' ? (index = 1) : index;
            wrapper.style.transition = 'none';
            wrapper.style.transform = `translateX(${-index * size}px)`;
        });
    }, timeout);
}

// //////////////////////////////////////////

function stopSlider() {
    if (
        event.currentTarget.className === 'slider-wrapper slider-wrapper-first'
    ) {
        clearInterval(timerIdWrapper);
    }
}

// function runSlider() {
//     if (event.currentTarget.className === 'slider-wrapper stop-slider') {
//         event.type == 'mouseout';
//         timerIdWrapper = setInterval(autoSlider);
//     }
// }

// ///////////////////////////////////////////

function SliderUsual(elem) {
    this.elem = document.querySelector(elem);
    this.sliderDots = document.querySelectorAll('.slider__dot');
    this.init();
    this.move();
    this.carousel();
    this.moveDots();
    this.wrapper.addEventListener('mouseover', showNameSlider);
}

SliderUsual.prototype = Object.create(SliderInfinity.prototype);
SliderUsual.prototype.letructor = SliderUsual;

SliderUsual.prototype.move = function() {
    let size = this.slide.clientWidth;
    this.index = 0;
    this.wrapper.style.transform = `translateX(${-this.index * size}px)`;
};

SliderUsual.prototype.carousel = function() {
    let me = this;
    let max = this.buttons.length;
    let maxDots = this.sliderDots.length;

    for (let i = 0; i < max; i += 1) {
        me.buttons[i].addEventListener(
            'click',
            SliderUsual[me.buttons[i].id].bind(null, me)
        );
    }

    for (let i = 0; i < maxDots; i++) {
        me.sliderDots[i].addEventListener(
            'click',
            SliderUsual[me.sliderDots[i].id].bind(null, me)
        );
    }
};

SliderUsual.ol_move = function(box) {
    let max = box.slides.length;
    let size = box.slide.clientWidth;
    box.wrapper.style.transition = 'transform .3s ease-in-out';
    box.index >= max - 1 ? false : box.index++;
    box.wrapper.style.transform = `translateX(${-box.index * size}px)`;
    box.jump();
    box.moveDots();
    box.jumpDots();
};

SliderUsual.prev = function(box) {
    let size = box.slide.clientWidth;
    box.wrapper.style.transition = 'transform .3s ease-in-out';
    box.index <= 0 ? false : box.index--;
    box.wrapper.style.transform = `translateX(${-box.index * size}px)`;
    box.jump();
    box.moveDots();
    box.jumpDots();
};

SliderUsual.next = function(box) {
    let max = box.slides.length;
    let size = box.slide.clientWidth;
    box.wrapper.style.transition = 'transform .3s ease-in-out';
    box.index >= max - 1 ? false : box.index++;
    box.wrapper.style.transform = `translateX(${-box.index * size}px)`;
    box.jump();
    box.moveDots();
    box.jumpDots();
};

SliderUsual.prototype.jumpDots = function() {
    let me = this;
    let size = me.slide.clientWidth;
    me.wrapper.addEventListener('transitionend', () => {
        me.slides[me.index].id === 'firstClone' ? (me.index = 1) : me.index;
        me.slides[me.index].id === 'lastClone'
            ? (me.index = me.slides.length - 2)
            : me.index;
        me.wrapper.style.transition = 'none';
        me.wrapper.style.transform = `translateX(${-me.index * size}px)`;
    });
};

SliderUsual.prototype.jump = function() {
    let me = this;
    let size = me.slide.clientWidth;
    me.wrapper.addEventListener('transitionend', () => {
        me.slides[me.index].id === 'firstClone' ? (me.index = 1) : me.index;
        me.slides[me.index].id === 'lastClone'
            ? (me.index = me.slides.length - 2)
            : me.index;
        me.wrapper.style.transition = 'none';
        me.wrapper.style.transform = `translateX(${-me.index * size}px)`;
    });
};

SliderUsual.prototype.moveDots = function() {
    for (let i = 0; i < this.sliderDots.length; i++) {
        if ([i] == this.index) {
            this.sliderDots[i].classList.add('active');
        } else {
            this.sliderDots[i].classList.remove('active');
        }
    }
};

function showNameSlider() {
    if (
        event.currentTarget.className === 'slider-wrapper slider-wrapper-second'
    ) {
        let namePlane = event.target.getAttribute('data-about');
        event.target.setAttribute('title', namePlane);
    }
}

sliderInfinity = new SliderInfinity('#main-slider');
sliderUsual = new SliderUsual('#usual-slider');
