const botton = document.querySelector('.card-btn');
const caId = document.querySelector('.card');
const Locations = document.querySelector('.location');
const Showlock = document.querySelector('.showlock');
const Hidelock = document.querySelector('.hidelock');

botton.addEventListener('click',()=>{
    caId.classList.toggle('active');
});

Locations.addEventListener('click',()=>{
    caId.classList.toggle('active-loc');
});

Showlock.addEventListener('click',()=>{
    caId.classList.add('active-map');
});
Hidelock.addEventListener('click',()=>{
    caId.classList.remove('active-map');
});