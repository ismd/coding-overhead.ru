document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.vg-hamburger');
    const sidebar = document.querySelector('.vg-sidebar');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            sidebar.classList.toggle('is-active');
        });
    }
});
