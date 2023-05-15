(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        let categoryButtons = document.querySelectorAll('.category-button');
    
        // Initialize Isotope
        let grid = new Isotope('.gallery-container', {
            itemSelector: '.gallery-item',
            layoutMode: 'fitRows'
        });
    
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                let category = this.dataset.category;
    
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
    
                // Add active class to clicked button
                this.classList.add('active');
    
                // Filter items
                if (category === 'all') {
                    grid.arrange({ filter: '*' });
                } else {
                    grid.arrange({ filter: '.' + category });
                }
            });
        });
    });
    
    
    
})(jQuery);
