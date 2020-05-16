 $("div#scroll").bind("mousewheel",function(ev, delta) {
    var scrollTop = $(this).scrollTop();
    $(this).scrollTop(scrollTop-Math.round(delta));
});