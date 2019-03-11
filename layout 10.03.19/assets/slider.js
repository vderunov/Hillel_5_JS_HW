function Slider(elem) {
    this.elem = document.querySelector(elem);
    this.init();
};

Slider.prototype.init = function () {
    this.wrapper = this.elem.querySelector('.slider-wrapper');
    this.slides = this.elem.querySelectorAll('.slide');
    this.slide = this.elem.querySelector('.slide');
    this.autoSlider(this.wrapper, this.slides, this.slide, 2000);
};

Slider.prototype.autoSlider = function (wrapper, slides, slide, timeout) {
    let index = 1;
    var max = slides.length;
    var size = slide.clientWidth;
    let timerId = setInterval(function () {
        wrapper.style.transition = 'transform .3s ease-in-out';
        index >= max - 1 ? false : index++;
        wrapper.style.transform = 'translateX(' + (-index * size) + 'px)';
        wrapper.addEventListener('transitionend', function () {
            slides[index].id === 'firstClone' ? index = 1 : index;
            wrapper.style.transition = 'none';
            wrapper.style.transform = 'translateX(' + (-index * size) + 'px)';
        });
    }, timeout);
};

slider = new Slider('#main-slider');