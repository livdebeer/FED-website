// JavaScript Document
console.log("hi");

const sectionBar = document.getElementById('foodpictures');
const images = sectionBar.querySelectorAll('img');
let currentIndexBar = 0;

function scrollToNextImage() {
    currentIndexBar++;
    if (currentIndexBar >= images.length) {
        currentIndexBar = 0; 
    }
    
    const scrollLeft = currentIndexBar * 335;
    sectionBar.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
}

setInterval(scrollToNextImage, 5000);



const sectionLab = document.getElementById('labpictures');
const imageslab = sectionLab.querySelectorAll('img');
let currentIndexLab = 0;

function scrollToNextImageLab() {
    currentIndexLab++;
    if (currentIndexLab >= imageslab.length) {
        currentIndexLab = 0; 
    }
    
    const scrollLeft = currentIndexBar * 335;
    sectionLab.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
}

setInterval(scrollToNextImageLab, 5000);



const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');
const shadow = document.getElementById('shadowmenu');

// Toggle menu on hamburger click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    shadow.classList.toggle('active');
});

// Hide menu on close icon click
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    shadow.classList.remove('active');
});
