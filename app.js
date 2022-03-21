function scrollToHome() {
    //window.scrollTo(0, document.body.scrollHeight)
    window.scroll({
        top: 0 * window.innerHeight / 100,
        left: 0,
        behavior: 'smooth'
    });
}

function scrollToAbout() {
    //window.scrollTo(0, document.body.scrollHeight)
    window.scroll({
        top: 100 * window.innerHeight / 100,
        left: 0,
        behavior: 'smooth'
    });
}

function scrollToPortfolio() {
    //window.scrollTo(0, document.body.scrollHeight)
    window.scroll({
        top: 200 * window.innerHeight / 100,
        left: 0,
        behavior: 'smooth'
    });
}

function scrollToContact() {
    //window.scrollTo(0, document.body.scrollHeight)
    window.scroll({
        top: 300 * window.innerHeight / 100,
        left: 0,
        behavior: 'smooth'
    });
}
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}


