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

    // Taxonomy page
    const taxonomyList = document.querySelectorAll('.vg-taxonomy-list');
    const taxonomyRows = document.querySelectorAll('.vg-taxonomy-row');
    const taxonomyPostsList = document.querySelectorAll('.vg-taxonomy-posts-list');
    let taxonomyRowSelected = false;

    if (taxonomyList?.[0]) {
        taxonomyRows.forEach(row => {
            row.addEventListener('click', () => {
                if (!taxonomyRowSelected) {
                    row.classList.add('vg-taxonomy-row_selected');

                    taxonomyPostsList.forEach(postsList => {
                        if (postsList.dataset.id === row.dataset.target) {
                            postsList.classList.add('vg-taxonomy-posts-list_selected')
                        } else {
                            postsList.classList.remove('vg-taxonomy-posts-list_selected')
                        }
                    });

                    taxonomyList[0].classList.add('vg-taxonomy-list_open');
                    taxonomyRowSelected = true;
                } else {
                    if (row.classList.contains('vg-taxonomy-row_selected')) {
                        row.classList.remove('vg-taxonomy-row_selected');
                        taxonomyList[0].classList.remove('vg-taxonomy-list_open');
                        taxonomyRowSelected = false;
                    } else {
                        taxonomyRows.forEach(row => row.classList.remove('vg-taxonomy-row_selected'));
                        row.classList.add('vg-taxonomy-row_selected');

                        taxonomyPostsList.forEach(postsList => {
                            if (postsList.dataset.id === row.dataset.target) {
                                postsList.classList.add('vg-taxonomy-posts-list_selected')
                            } else {
                                postsList.classList.remove('vg-taxonomy-posts-list_selected')
                            }
                        });
                    }
                }
            });
        });
    }
});
