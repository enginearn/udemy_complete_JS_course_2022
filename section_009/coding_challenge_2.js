'use strict';

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });

    // const alertH1 = function (e) {
    //     alert('addEventListener: Great! You are reading the heading :D');
    //     // header.removeEventListener('mouseenter', alertH1);
    // };

    // header.addEventListener('mouseenter', alertH1);

    setTimeout(function () {
        header.style.color = 'orange';
    }, 3000);

    // setTimeout(() => {
    //     header.style.color = 'orange';
    // }, 3000);

    // setInterval(() => {
    //     header.style.color = 'green';
    // }, 1000);

    // const randomInt = (min, max) =>
    //     Math.floor(Math.random() * (max - min + 1) + min);

    // const randomColor = () =>
    //     `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

    // console.log(randomColor(0, 255));

    // document.querySelector('.nav__link').addEventListener('click', function (e) {
    //     this.style.backgroundColor = randomColor();
    //     console.log('LINK', e.target, e.currentTarget);

    //     // Stop propagation
    //     // e.stopPropagation();
    // });

    // document.querySelector('.nav__links').addEventListener('click', function (e) {
    //     this.style.backgroundColor = randomColor();
    //     console.log('CONTAINER', e.target, e.currentTarget);
    // });

    // document.querySelector('.nav').addEventListener('click', function (e) {
    //     this.style.backgroundColor = randomColor();
    //     console.log('NAV', e.target, e.currentTarget);
    // }, true);

    // const h1 = document.querySelector('h1');

    // // Going downwards: child
    // console.log(h1.querySelectorAll('.highlight'));
    // console.log(h1.childNodes);
    // console.log(h1.children);
    // h1.firstElementChild.style.color = 'white';
    // h1.lastElementChild.style.color = 'orangered';

    // // Going upwards: parents
    // console.log(h1.parentNode);
    // console.log(h1.parentElement);

    // h1.closest('.header').style.background = 'var(--gradient-secondary)';
    // h1.closest('h1').style.background = 'var(--gradient-primary)';
    // h1.closest('h1').style.color = 'white';

    // // Going sideways: siblings
    // console.log(h1.previousElementSibling);
    // console.log(h1.nextElementSibling);

    // console.log(h1.parentElement.children);
    // [...h1.parentElement.children].forEach(function (el) {
    //     if (el !== h1) el.style.transform = 'scale(0.5)';
    // });

    // const tabs = document.querySelectorAll('.operations__tab');
    // const tabsContainer = document.querySelector('.operations__tab-container');
    // const tabsContent = document.querySelectorAll('.operations__content');
})();
