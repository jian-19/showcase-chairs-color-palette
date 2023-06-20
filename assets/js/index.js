document.querySelector('.blue').addEventListener('click', changeColorBlue);
document.querySelector('.green-lemon').addEventListener('click', changeColorLemon);
document.querySelector('.green-origin').addEventListener('click', changeColorOrigin);
document.querySelector('.grey').addEventListener('click', changeColorGrey);
document.querySelector('.orange').addEventListener('click', changeColorOrange);
document.querySelector('.purple').addEventListener('click', changeColorPurple);

const image = document.querySelector('.img-showcase');
const container = document.querySelector('.container');

function changeColorBlue() {
    image.src = "./assets/img/cadeira blue.png";
    container.style.background = 'var(--background-blue)';
}
function changeColorLemon() {
    image.src = "./assets/img/cadeira green lemon.png";
    container.style.background = 'var(--background-green-lemon)';
}
function changeColorOrigin() {
    image.src = "./assets/img/cadeira green origin.png";
    container.style.background = 'var(--background-green-origin)';
}
function changeColorGrey() {
    image.src = "./assets/img/cadeira grey.png";
    container.style.background = 'var(--background-grey)';
}
function changeColorOrange() {
    image.src = "./assets/img/cadeira orange.png";
    container.style.background = 'var(--background-orange)';
}
function changeColorPurple() {
    image.src = "./assets/img/cadeira purple.png";
    container.style.background = 'var(--background-purple)';
}