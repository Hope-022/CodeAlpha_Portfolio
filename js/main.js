//============ SCROLL-SPY NAVIGATION =========

const desktopLinks = document.querySelectorAll('[data-nav]');
const sections = document.querySelectorAll('section[id]');

const observeOptions = {
    rootMargin: '-40% 0px -55% 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            const id = entry.target.id;

            desktopLinks.forEach ((link) => link.classList.remove('active'));
            
            const activeLink = document.querySelector(`[data-nav][href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, observeOptions);

sections.forEach((section) => observer.observe(section));

// ============ MOBILE MENU TOGGLE ======
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn')

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    menuBtn.setAttribute('aria-expanded', true);
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
});

const mobileLinks = document.querySelectorAll('[data-nav-mobile]');

mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
    });
});

// ============ SCROLL REVEAL ============
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => revealObserver.observe(el));