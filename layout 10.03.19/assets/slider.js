function makeSlider() {

    function Slider() {
        this.init();
    };

    Slider.prototype.init = function () {
        this.autoSlider(2000);
    };

    Slider.prototype.autoSlider = function (timeout) {
        var left = 0;
        setInterval(function () {
            var wrapper = document.querySelector('.slider-wrapper');
            left = left - 600;
            if (left < -1200) {
                left = 0;
            }
            wrapper.style.left = left + 'px';
        }, timeout);
    }
    slider = new Slider;
};

makeSlider();