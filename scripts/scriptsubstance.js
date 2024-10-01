const sectionSubstance = document.getElementById('pictures-substance');
const imagesSubstance = sectionSubstance.querySelectorAll('img');
let currentIndexSubstance = 0;

function scrollToNextImageLab() {
    currentIndexSubstance++;
    if (currentIndexSubstance >= imagesSubstance.length) {
        currentIndexSubstance = 0; 
    }
    
    const scrollLeft = currentIndexSubstance * 300;
    sectionSubstance.scrollTo({
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