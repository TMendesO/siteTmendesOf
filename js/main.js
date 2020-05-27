$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});


$('.btn').on('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="' + url + '"></iframe>');
});
/*onclick = function () {
    $('body').css('background-color', 'red');
}



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});
*/
