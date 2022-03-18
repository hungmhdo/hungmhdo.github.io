/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.querySelector('header');
    // When the scroll is greater than 50vp, add the scroll-header class to the header tag
    if (window.scrollY > 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== EXPERIENCES MODAL ===============*/
const modalViews = document.querySelectorAll('.experiences__modal'),
    modalBtns = document.querySelectorAll('.experiences__button'),
    modalClose = document.querySelectorAll('.experiences__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i);
    });
});

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        });
    });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card',
    },
    animation: {
        duration: 300,
    },
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach((lw) => {
        lw.classList.remove('active-work');
    });
    this.classList.add('active-work');
}

linkWork.forEach((lw) => {
    lw.addEventListener('click', activeWork);
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperAwards = new Swiper('.awards__container', {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
