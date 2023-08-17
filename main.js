const naoBtn = document.querySelector('#nao');
const simBtn = document.querySelector('#sim');
const img = document.querySelector('.img');

simBtn.addEventListener('mouseover', ()=>{
    img.style.backgroundImage = "url('uepaaa.jpg')"
});
simBtn.addEventListener('mouseout', ()=>{
    img.style.backgroundImage = "url('uepaaa.jpg')"
});
naoBtn.addEventListener('mouseover', ()=>{
   naoBtn.style.position = 'absolute';

   setRandomPosition();
});


function setRandomPosition() {
var viewportWidth = document.documentElement.clientWidth;
var viewportHeight = document.documentElement.clientHeight;

var maxLeft = viewportWidth - naoBtn.clientWidth;
var maxTop = viewportHeight - naoBtn.clientHeight;

naoBtn.style.left = Math.floor(Math.random() * maxLeft) + "px";
naoBtn.style.top = Math.floor(Math.random() * maxTop) + "px";
}
