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

//hiding of link "donate" in footer
let linksNavigation = document.querySelectorAll('.navigation__item-footer');
for (let link of linksNavigation) {
    if (link.textContent.trim() === 'Donate') {
        link.hidden = true;
    }
}

//burger and menu-mobile
let burger = document.querySelector('.burger');

let menuNav = document.querySelector('.navigation-desktop');
let menuList = document.querySelector('.navigation__list');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo__container');
menuNav.classList.add('hidden');

burger.onclick = () => {
    burger.classList.toggle('close');

    header.append(menuNav);
    menuNav.classList.toggle('hidden');
    menuNav.classList.toggle('menu__mobile');
    menuList.classList.toggle('navigation__list-mobile');
}

//range values
let range = document.querySelector('.scrol');
let textValues = document.querySelectorAll('.range__value');
window.onresize = ()=> resizeWindow() ;
resizeWindow();
function resizeWindow() {
    console.log('k')
    if (windowInnerWidth > tabletScreen && windowInnerWidth < smallDesktop) {
        range.min = 25;
        range.max = 175;
    }
    if (windowInnerWidth < tabletScreen) {
        range.min = 25;
        range.max = 125;
    }
    for (let textValue of textValues) {
        if (!(+textValue.textContent.slice(1) >= +range.min) || !(+textValue.textContent.slice(1) <= +range.max)) {
            textValue.remove();
        }
    }
}
