document.addEventListener('DOMContentLoaded', () => {
    console.log('Groningen Explorer loaded');

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    toggle.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });
});
