let mobileScreen = 320;
let tabletScreen = 640;
let smallDesktop = 1000;
const windowInnerWidth = document.documentElement.clientWidth;


//active page
let links = document.querySelectorAll('.navigation__link');
for (let link of links) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
}

//cropping of testimonials 
let testimonials = document.querySelectorAll('.testimonial-text__container');
for (let testimonial of testimonials) {
let testimonialText = testimonial.innerHTML;
let slicedText = testimonialText.slice(0,1200);
if (windowInnerWidth<=mobileScreen) {
    slicedText = testimonialText.slice(0,190);
}
if (windowInnerWidth>mobileScreen && windowInnerWidth<tabletScreen) {
    slicedText = testimonialText.slice(0,250);
}
if (windowInnerWidth>=tabletScreen && windowInnerWidth<=smallDesktop) {
    slicedText = testimonialText.slice(0,800);
}
if (slicedText.length<testimonialText.length){
    testimonial.innerHTML = slicedText.trim() + '...';
}
}

//hiding of link "donate" in footer
let linksNavigation = document.querySelectorAll('.navigation__item-footer');
for (let link of linksNavigation) {
    if (link.textContent.trim() === 'Donate') {
        link.hidden=true;
    } 
}

//burger and menu-mobile
let burger = document.querySelector('.burger');

let menuNav = document.querySelector('.navigation-desktop');
let menuList = document.querySelector('.navigation__list');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo__container');
menuNav.classList.add('hidden');

burger.onclick =()=>{
burger.classList.toggle('close');

header.append(menuNav);
menuNav.classList.toggle('hidden');
menuNav.classList.toggle('menu__mobile');
menuList.classList.toggle('navigation__list-mobile');   
}

//hide arrows on small display
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
window.onresize = function () {
if (window.innerWidth>smallDesktop && window.innerWidth<=1280) {
    arrowLeft.hidden=true;
    arrowRight.hidden=true;
}
else     {arrowLeft.hidden=false;
arrowRight.hidden=false;
}
}


