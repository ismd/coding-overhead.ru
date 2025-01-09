document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu
    const hamburger = document.querySelector('.vg-hamburger');
    const sidebar = document.querySelector('.vg-sidebar');
    const body = document.querySelector('body');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            body.classList.toggle('vg-sidebar-open');
            hamburger.classList.toggle('is-active');
            sidebar.classList.toggle('is-active');
        });
    }

    // About page tabs
    const tabs = document.querySelectorAll('.vg-about-extended-info-tabs__tab');
    const tabsContent = document.querySelectorAll('.vg-about-extended-info-tabs__content');

    if (tabs) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(tab => tab.classList.remove('vg-about-extended-info-tabs__tab_active'));
                tab.classList.add('vg-about-extended-info-tabs__tab_active');

                tabsContent.forEach(content => {
                    content.classList.remove('vg-about-extended-info-tabs__content_active');
                    if (content.dataset.tab === tab.dataset.tab) {
                        content.classList.add('vg-about-extended-info-tabs__content_active');
                    }
                });
            });
        });
    }
});
