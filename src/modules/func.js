export function slideWidth(sldeCount) {
    let slides = document.getElementsByClassName('slides')[0];
    slides.style.width = (sldeCount * 136 + (sldeCount - 1) * 25) + 'px';
}