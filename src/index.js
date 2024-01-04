import '@babel/polyfill';
import './index.html';
import './index.scss';
import {slideWidth} from './modules/func';


// Кол-во выводимых на экран слайдов

let slideCount = 4;
slideWidth(slideCount);

let leftBtn = document.getElementsByClassName('arrow')[0];
let rightBtn = document.getElementsByClassName('arrow')[1];
let firstSlide = document.getElementsByClassName('slide')[0];

let cur = 0;
leftBtn.onclick = () => {
    goLeft();
}

rightBtn.onclick = () => {
    goRight();
}

function goRight() {
    if (7-slideCount == cur) {
        return;
    }
    cur++;
    firstSlide.style.marginLeft = cur * -161 + 'px';
    check();
}
function goLeft() {
    if (0 == cur) {
        return;
    }
    cur--;
    firstSlide.style.marginLeft = cur * -161 + 'px';
    check();
}

function check() {
    if (cur == 0) {
        leftBtn.classList.add('disable');
    } else if (cur == 7-slideCount) {
        rightBtn.classList.add('disable');
    } else {
        leftBtn.classList.remove('disable');
        rightBtn.classList.remove('disable');
    }
}

check();


document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight') {
        goRight();
    }
    if (event.code == 'ArrowLeft') {
        goLeft();
    }
});

addEventListener("resize", () => {
    if (window.innerWidth > 880) {
        slideCount = 4;
        slideWidth(slideCount);
    }
    if (window.innerWidth < 880) {
        slideCount = 3;
        slideWidth(slideCount);
    }
    if (window.innerWidth < 710) {
        slideCount = 2;
        slideWidth(slideCount);
    }
    if (window.innerWidth < 550) {
        slideCount = 1;
        slideWidth(slideCount);
    }
    goFirst();
});

function goFirst() {
    cur = 0;
    firstSlide.style.marginLeft = cur * -161 + 'px';
    check();
}