//active page
let links = document.querySelectorAll('.navigation__link');
for (let link of links) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
}

//cropping of testimonials 
const windowInnerWidth = document.documentElement.clientWidth
let testimonials = document.querySelectorAll('.testimonial-text__container');
for (let testimonial of testimonials) {
let testimonialText = testimonial.innerHTML;
let slicedText = testimonialText.slice(0,1200);
if (windowInnerWidth === 320) {
    slicedText = testimonialText.slice(0,190);
}
if (slicedText.length<testimonialText.length){
    testimonial.innerHTML = slicedText.trim() + '...';
}
}

//hiding of link "donate" in footer
let linksNavigation = document.querySelectorAll('.navigation__item-footer');
console.log(linksNavigation)
for (let link of linksNavigation) {
    if (link.textContent.trim() === 'Donate') {
        link.hidden=true;
    } 
}