// e.currentTarget.scrollLeft;
let left = document.getElementById('left');
let right = document.getElementById('right');
let index = 0;
let images = [
  './images/S9.jpg',
  './images/S1.jpg',
  './images/S2.jpg',
  './images/S3.jpg',
  './images/S4.jpg',
  './images/S5.jpg',
  './images/S6.jpg',
  './images/S7.jpg',
  './images/S8.jpg',
];
left.addEventListener(
  'click',
  () => {
    index = (index + 8) % 9;
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    console.log(index);
    img1.src = images[(index + 8) % 9];
    img2.src = images[index];
    img3.src = images[(index + 1) % 9];
  },
  true
);
right.addEventListener(
  'click',
  () => {
    index = (index + 1) % 9;
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    console.log(index);
    img1.src = images[(index + 8) % 9];
    img2.src = images[index];
    img3.src = images[(index + 1) % 9];
  },
  true
);
