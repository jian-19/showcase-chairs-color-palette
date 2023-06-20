document.querySelector('.blue').addEventListener('click', changeColorBlue);
document.querySelector('.green-lemon').addEventListener('click', changeColorLemon);
document.querySelector('.green-origin').addEventListener('click', changeColorOrigin);
document.querySelector('.grey').addEventListener('click', changeColorGrey);
document.querySelector('.orange').addEventListener('click', changeColorOrange);
document.querySelector('.purple').addEventListener('click', changeColorPurple);

const image = document.querySelector('.img-showcase');
const container = document.querySelector('.container');

function removeShakeClass() {
    image.classList.remove('shake');
}

function addShakeClass() {
    image.classList.add('shake');
}

function changeColorBlue() {
    image.src = "./assets/img/cadeira blue.png";
    container.style.background = 'var(--background-blue)';
    addShakeClass();
    setTimeout(removeShakeClass, 800);
}
function changeColorLemon() {
    image.src = "./assets/img/cadeira green lemon.png";
    container.style.background = 'var(--background-green-lemon)';
    addShakeClass();
    setTimeout(removeShakeClass, 800);
}
function changeColorOrigin() {
    image.src = "./assets/img/cadeira green origin.png";
    container.style.background = 'var(--background-green-origin)';
    addShakeClass();
    setTimeout(removeShakeClass, 800);
}
function changeColorGrey() {
    image.src = "./assets/img/cadeira grey.png";
    container.style.background = 'var(--background-grey)';
    addShakeClass();
    setTimeout(removeShakeClass, 800);
}
function changeColorOrange() {
    image.src = "./assets/img/cadeira orange.png";
    container.style.background = 'var(--background-orange)';
    addShakeClass();
    setTimeout(removeShakeClass, 800);
}
function changeColorPurple() {
    image.src = "./assets/img/cadeira purple.png";
    container.style.background = 'var(--background-purple)';
    addShakeClass();
    setTimeout(removeShakeClass, 800);
}