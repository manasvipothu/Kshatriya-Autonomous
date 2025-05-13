const container = document.querySelector('.container');
const hero = document.querySelector('.hero');

container.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  hero.style.transform = `rotateY(${deltaX * 10}deg) rotateX(${deltaY * -10}deg)`;
});

container.addEventListener('mouseleave', () => {
  hero.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Scroll event listener to toggle 'scrolled' class on nav
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
