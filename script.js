// Navbar appear when scrolled
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Logo Change
function changeImage() {
    var image = document.getElementById('logo');
    image.style.opacity = 0;
    setTimeout(function() {
        image.src = 'img/Logo.png';
        image.style.opacity = 1;
    }, 150);
}

function resetImage() {
    var image = document.getElementById('logo');
    image.style.opacity = 0;
    setTimeout(function() {
        image.src = 'img/LogoInvert.png';
        image.style.opacity = 1;
    }, 150);
}
