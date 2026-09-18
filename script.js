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

    $('#send-button').click(function(){
        let input = $('#user-input').val();

        if(input == '1') {
            $('.chat-box').append(
                '<div class="user-message">1</div>' 
            );
            $('.chat-box').append(
                '<div class="bot-message">Kami menggunakan biji kopi Robusta, Arabica, serta beberapa biji kopi pilihan dari berbagai daerah di Indonesia.</div>'
            );
        } 
        
        else if(input == '2') {
            $('.chat-box').append(
                '<div class="user-message">2</div>'
            );
            $('.chat-box').append(
                '<div class="bot-message">Di setiap Cafe Nusantara, kami selalu menyediakan wifi gratis yang bisa digunakan oleh setiap pengunjung.</div>'
            );
        }

        else if(input == '3') {
            $('.chat-box').append (
                '<div class="user-message">3</div>'
            );
            $('.chat-box').append (
                '<div class="bot-message">Untuk saat ini Cafe Nusantara baru tersedia di Jl. Letjen S. Parman, Tomang, Kec Grogol Petamburan, Jakarta Barat</div>'
            );
        }

        else if(input == '4') {
            $('.chat-box').append (
                '<div class="user-message">4</div>'
            );
            $('.chat-box').append (
                '<div class="bot-message">Cafe buka dari pukul 09:00 - 21:00</div>'
            );
        }

        else if(input == '5') {
            $('.chat-box').append (
                '<div class="user-message">5</div>'
            );
            $('.chat-box').append(
                '<div class="bot-message">Bisa banget, untuk info lebih lanjut bisa menghubungi nomor ini +62 834-6236-7788</div>'
            );
        }

        else {
            $('.chat-box').append (
                '<div class="user-message">' + input + '</div>'
            );
            $('.chat-box').append (
                '<div class="bot-message">Silahkan masukkan pertanyaan yang ada di list.</div>'
            );
        }

         $('#user-input').val('');
    });
});