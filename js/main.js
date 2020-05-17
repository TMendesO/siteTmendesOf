
$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".menu").toggleClass("menu-open");
    })
});

      $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});