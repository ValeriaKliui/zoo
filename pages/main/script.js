//active page
let links = document.querySelectorAll('.navigation__link');
for (let link of links) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
}


//cropping of testimoials 
let testimonials = document.querySelectorAll('.small-paragraph');
for (let testimonial of testimonials) {
let testimonialText = testimonial.innerText;
let slicedText = testimonialText.slice(0,478);
if (slicedText.length<testimonialText.length){
    testimonial.textContent = slicedText.trim() + '...';
}
}



