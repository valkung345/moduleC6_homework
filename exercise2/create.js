const btn = document.querySelector(".j-btn-test");

let sHeight = window.screen.height;
let sWidth = window.screen.width;
let iHeight = window.innerHeight;
let iWidth = window.innerWidth;


btn.addEventListener("click", () => {
  window.alert(`Размер экрана устройства (ширина x высота, px):
  ${sWidth} x ${sHeight}
Размер экрана с учётом полосы прокрутки (ширина x высота, px):
  ${iWidth} x ${iHeight}`);
});
