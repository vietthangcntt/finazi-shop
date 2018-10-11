

jQuery(document).ready(function() {
    var pull = jQuery('.menu-collapser'),
     menu = jQuery('.primary-menu');

    jQuery(pull).on('click', function() {
        menu.slideToggle();
    });
    
    jQuery(window).resize(function() {
        var w = jQuery(window).width();
        if (w > 960 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});


jQuery(window).scroll(function() {
    var height = jQuery(window).scrollTop();
    if (height > 100) {
        jQuery('#totop').fadeIn();
    } else {
        jQuery('#totop').fadeOut();
    }
});
jQuery(document).ready(function() {
    jQuery("#totop").click(function(event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});


jQuery(document).ready(function() {
    var pull = jQuery('.sumit-search'),
     menu = jQuery('.consult-header-search-box');

    jQuery(pull).on('click', function() {
        menu.slideToggle();
    });
    
    jQuery(window).resize(function() {
        var w = jQuery(window).width();
        if (w > 960 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

(function ($) {
    $(document).ready(function() {
        jQuery('.quantity').each(function() {
            var spinner = jQuery(this),
            input = spinner.find('input[type="numbe"]'),
            btnUp = spinner.find('#inc-button'),
            btnDown = spinner.find('#dec-button'),
            min = input.attr('min'),
            max = input.attr('max');
            btnUp.click(function(e) {
                e.preventDefault();
                var oldValue = parseFloat(input.val());
                if (oldValue > max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                var newVal = oldValue + 1;

                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnDown.click(function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                  var newVal = oldValue;
                } else {
                  var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
    });

    $(document).ready(function() {
         jQuery('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
         console.log($('.slider-for'));
        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          centerMode: true,
          focusOnSelect: true
        });
    });
})(jQuery);