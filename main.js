(function ($) {
    "use strict"

    if($('.typed-text-output').length == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backspeed: 20,
            smartBackspace:false,
            loop: true
        });
    }
})(jQuery);