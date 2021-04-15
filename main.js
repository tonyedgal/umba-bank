// Animate Smooth Scroll //

$('#learn-more').on('click', function() {
    const features = $('#features').position().top;

    $('html, body').animate(
        {
            scrollTop: features
        },
         900
         );
});