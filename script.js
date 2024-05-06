const turnOnButton = document.getElementById('turnOnButton');
const turnOffButton = document.getElementById('turnOffButton');
const image = document.getElementById('myImage');
const h3Element = document.getElementById('h3');
const divbodyEl = document.querySelector('body');
turnOnButton.addEventListener('click', function() {
    image.src = './img/pic_bulbon.gif';
    divbodyEl.style.backgroundColor = 'white';
    h3Element.style.color = 'black';
    h3Element.innerHTML = 'This is way better';
 
});

turnOffButton.addEventListener('click', function() {
    image.src = './img/pic_bulboff.gif';
    h3Element.innerHTML = 'Here we go again';
    h3Element.style.color = 'white';
    divbodyEl.style.backgroundColor = 'black';
});