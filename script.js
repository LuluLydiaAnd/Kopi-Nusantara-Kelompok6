$(document).ready(function() {

    $('#menu-icon').click(function() {
        $(this).toggleClass('bx-x');
        $('.navbar').slideToggle(300);
    });

    $(window).resize(function() {
        if ($(window).width() >= 992) {
            $('.navbar').show();
            $('#menu-icon').removeClass('bx-x');
        } else {
            if (!$('#menu-icon').hasClass('bx-x')) {
                $('.navbar').hide();
            }
        }
    });

    $('.btn-like').click(function(e) {
        e.preventDefault(); 
        
        let $btn = $(this);
        let $countSpan = $btn.find('.like-count');
        let currentCount = parseInt($countSpan.text());

        if ($btn.hasClass('liked')) {
            $btn.removeClass('liked');
            $countSpan.text(currentCount - 1);
            $btn.find('i').removeClass('bxs-heart').addClass('bx-heart');
        } else {
            $btn.addClass('liked');
            $countSpan.text(currentCount + 1);
            $btn.find('i').removeClass('bx-heart').addClass('bxs-heart');
            
            $btn.find('i').fadeOut(100).fadeIn(100);
        }
    });

    $('.navbar a').click(function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80 
            }, 500);
            
            $('.navbar a').removeClass('active');
            $(this).addClass('active');

            if ($(window).width() < 992) {
                $('#menu-icon').removeClass('bx-x');
                $('.navbar').slideUp();
            }
        }
    });
});
