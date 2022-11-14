//active page

let links = document.querySelectorAll('.navigation__link');
for (let link of links) {
    console.log(link.href, window.location.href)
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
}
