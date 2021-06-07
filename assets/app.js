const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const signUp = document.querySelector('#sign-up-page');
    const galery = document.querySelector('#sign-galery');
    const contact = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;
    //console.log(scrollPos);

    //adds 'highlight' class to main menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2800) {
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        signUp.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3800) {
        servicesMenu.classList.remove('highlight');
        signUp.classList.add('highlight');
        galery.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4700) {
        signUp.classList.remove('highlight');
        galery.classList.add('highlight');
        contact.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 5600) {
        galery.classList.remove('highlight');
        contact.classList.add('highlight');
        return;
    }  


    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//Close mobile Menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);





























