let parentElem = document.getElementById("resizeElem");

window.addEventListener("resize", resizeThrottler);

var resizeTimeout;

function resizeThrottler() {
  if (resizeTimeout) {
    //после запуска таймера, переменная resizeTimeout содержит числовой идентификатор таймера, в связи с чем, она становится true и при запуске функции resizeThrottler до истечения  отложенного вызова (в 2 сек), выполняется условие if и clearTimeout останавливает запущенный ранее таймер.
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(function() {
    resizeTimeout = null;
    document.getElementById("resizeElem").innerHTML = actualResizeHandler();
  }, 2000);
}

document.getElementById("resizeElem").innerHTML = actualResizeHandler();

function actualResizeHandler() {
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  return `Window size: width= ${w}, height= ${h}`;
}
