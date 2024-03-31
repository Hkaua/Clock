const strips = [...document.querySelectorAll('.strip')];
const numberSize = '8';

function highlight(strip, d) {
    strips[strip]
    .querySelector(`.number:nth-of-type(${d + 1})`)
    .classList.add('pop');

    setTimeout(() => {
        strips[strip]
        .querySelector(`.number:nth-of-type(${d + 1})`)
        .classList.remove('pop');
    }, 950);
}

function stripSlider(strip, number) {
    let d1 = Math.floor(number / 10);
    let d2 = number % 10;

    strips[strip].style.transform = `translateY(${d1 * -numberSize}vmin)`;
    highlight(strip, d1);
    strips[strip + 1].style.transform = `translateY(${d2 * -numberSize}vmin)`;
    highlight(strip + 1, d2);
}

setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    stripSlider(0, hours);
    stripSlider(2, mins);
    stripSlider(4, secs);
}, 1000);  