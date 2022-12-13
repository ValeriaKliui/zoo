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


//range values
let range = document.querySelector('.scrol');
let textValues = document.querySelectorAll('.range__value');
window.onresize = () => resizeWindow();
resizeWindow();
function resizeWindow() {
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
let allRangeValues = [];
for (let rangeValue of textValues){
    allRangeValues.push(+rangeValue.textContent.slice(1));
}
let amountField = document.querySelector('.amount__input');
amountField.oninput = () => {
    if (amountField.value.length > 4) {
        amountField.value = amountField.value.slice(0, 4);
    }
    if (allRangeValues.includes(+amountField.value)){
           range.value = amountField.value;
    }
}
range.oninput = () => {
    amountField.value = range.value;
}
