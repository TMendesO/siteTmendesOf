$('#dino').on('shown.bs.modal', function () {


    $('#myInput').trigger('focus')
});


$('.btn').on('click', function (e) {

    e.preventDefault();
    var url = $(this).attr('href');
    $(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="' + url + '"></iframe>');
});

debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};



(function () {
    var $target = $('.content'),
        animationClass = 'content-start',
        offset = $(window).height() * 1.4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - 30) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animeScroll();
    $(document).scroll(debounce(function () {
        animeScroll();
    }, 160));
}());
