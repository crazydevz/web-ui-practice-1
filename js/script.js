jQuery(document).ready(function() {

    new Waypoint({
        element: jQuery('.js--waypoint'),
        handler: function(direction) {
            if(direction === "down") {
                jQuery('.main-nav').addClass('sticky-nav');
                jQuery('.list-container').addClass('sticky-list-container');
            } else {
                jQuery('.main-nav').removeClass('sticky-nav');
                jQuery('.list-container').removeClass('sticky-list-container');
            }
        },
        offset: '0px'
    });

    $('.js--mobile-nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon ion-icon');

        nav.slideToggle(200);

        if(icon.hasClass('icon-menu')) {
            icon.removeClass('icon-menu');

            icon.addClass('icon-unstack');
            icon.attr('name', 'arrow-round-up')
        } else {
            icon.removeClass('icon-unstack');

            icon.addClass('icon-menu');
            icon.attr('name', 'menu')
        }
    });
});