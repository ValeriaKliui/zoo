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
cropTestimonials();
window.onresize = () => cropTestimonials();

function cropTestimonials() {
    for (let testimonial of testimonials) {
        let testimonialText = testimonial.innerHTML;
        let slicedText = testimonialText.slice(0, 1200);
        if (windowInnerWidth <= mobileScreen) {
            slicedText = testimonialText.slice(0, 190);
        }
        else if (windowInnerWidth > mobileScreen && windowInnerWidth < tabletScreen) {
            slicedText = testimonialText.slice(0, 250);
        }
        else if (windowInnerWidth >= tabletScreen && windowInnerWidth <= smallDesktop) {
            slicedText = testimonialText.slice(0, 800);
        }
        if (slicedText.length < testimonialText.length) {
            testimonial.innerHTML = slicedText.trim() + '...';
        }
    }
}


//checking validity of the form
let input = document.querySelector('.email');
let submitButton = document.querySelector('.email-submit');
submitButton.classList.add('submit-invalid');
input.addEventListener("input", () => {
    if (!input.validity.typeMismatch) {
        submitButton.classList.remove('submit-invalid');
        submitButton.classList.add('submit-valid');
    }
    else submitButton.classList.add('submit-invalid');

})

//hiding of link "donate" in footer
let linksNavigation = document.querySelectorAll('.navigation__item-footer');
for (let link of linksNavigation) {
    if (link.textContent.trim() === 'Donate') {
        link.hidden = true;
    }
}

//burger and menu-mobile
let burger = document.querySelector('.burger');
let area = document.querySelector('body');
let menuNav = document.querySelector('.navigation-desktop');
let menuList = document.querySelector('.navigation__list');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo__container');
menuNav.classList.add('hidden');

let shadow = document.createElement('div');
document.body.prepend(shadow);
burger.onclick = () => {
    document.body.classList.toggle('stop-scroll');
    shadow.classList.toggle('shadow');
    burger.classList.toggle('close');
    header.append(menuNav);
    menuNav.classList.toggle('hidden');
    menuNav.classList.toggle('menu__mobile');
    menuList.classList.toggle('navigation__list-mobile');
    document.onclick = (event) => {
        if (!event.target.closest('nav') && !event.target.closest('.burger') && menuNav.classList.contains('menu__mobile')) {
            document.body.classList.toggle('stop-scroll');
            shadow.classList.toggle('shadow');
            burger.classList.toggle('close');
            header.append(menuNav);
            menuNav.classList.toggle('hidden');
            menuNav.classList.toggle('menu__mobile');
            menuList.classList.toggle('navigation__list-mobile');
        }
    }
}

//carousel in pets
let arrowNext = document.querySelector('.arrow__button-right');
let allPets = document.querySelectorAll('.pets__item');
if (windowInnerWidth>mobileScreen && windowInnerWidth<=tabletScreen){
allPets[4].hidden='true';
allPets[5].hidden='true';
allPets[6].hidden='true';
allPets[7].hidden='true';
let i = 0;
arrowNext.onclick = () => {
    allPets[i].style.display = 'none';
    allPets[i + 1].style.display = 'none';
    allPets[i + 2].style.display = 'none';
    allPets[i + 3].style.display = 'none';
    i = i + 4;
    if (i + 2 >= allPets.length) i = 0;
    allPets[i].style.display = 'block';
    allPets[i + 1].style.display = 'block';
    allPets[i + 2].style.display = 'block';
    allPets[i + 3].style.display = 'block';
}
let arrowPrev = document.querySelector('.arrow__button-left');
arrowPrev.onclick = () => {
    allPets[i].style.display = 'none';
    allPets[i + 1].style.display = 'none';
    allPets[i + 2].style.display = 'none';
    allPets[i + 3].style.display = 'none';
    i = i - 4;
    if (i + 2 < 0) i = allPets.length - 4;
    allPets[i].style.display = 'block';
    allPets[i + 1].style.display = 'block';
    allPets[i + 2].style.display = 'block';
    allPets[i + 3].style.display = 'block';
}
}
else if (windowInnerWidth>=tabletScreen) {
    allPets[3].hidden='true';
    allPets[4].hidden='true';
    allPets[5].hidden='true';    
    allPets[6].hidden='true';
allPets[7].hidden='true';
let i = 0;
arrowNext.onclick = () => {
    allPets[i].style.display = 'none';
    allPets[i + 1].style.display = 'none';
    allPets[i + 2].style.display = 'none';
    i = i + 3;
    if (i + 3 >= allPets.length) i = 0;
    allPets[i].style.display = 'block';
    allPets[i + 1].style.display = 'block';
    allPets[i + 2].style.display = 'block';
}
let arrowPrev = document.querySelector('.arrow__button-left');
arrowPrev.onclick = () => {
    allPets[i].style.display = 'none';
    allPets[i + 1].style.display = 'none';
    allPets[i + 2].style.display = 'none';
    i = i - 3;
    if (i + 1 < 0) i = allPets.length - 5;
    allPets[i].style.display = 'block';
    allPets[i + 1].style.display = 'block';
    allPets[i + 2].style.display = 'block';
}
}
