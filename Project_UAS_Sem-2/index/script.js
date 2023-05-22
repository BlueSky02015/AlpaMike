const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const button = document.querySelector('.btn');
const about = document.querySelector('.about');
const isi = document.querySelector('.co-3');

btnPopup.addEventListener('click',()=>{
    wrapper.classList.toggle('active-popup');
});
button.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

about.addEventListener('click',()=>{
    isi.classList.toggle('active-about');
});