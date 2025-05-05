
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
    mobileMenuOverlay.classList.toggle('hidden');
});

mobileMenuOverlay.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    mobileMenuOverlay.classList.add('hidden');
});
