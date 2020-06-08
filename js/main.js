$('#dino').on('shown.bs.modal', function () {


    $('#myInput').trigger('focus')
});


$('.btn').on('click', function (e) {

    e.preventDefault();
    var url = $(this).attr('href');
    $(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="' + url + '"></iframe>');
});


$("#btnTeste").click(function () {
    //Sem parâmetros: o efeito é executado em 400ms
    $("#minhaDiv").slideUp();
    //Parâmetro com a duração em ms do efeito
    $("#minhaDiv").slideUp(1000);
    //Informada duração e função de callback
    $("#minhaDiv").slideUp("fast",
        function () {
            alert("Slide concluido");
        }
    );
});
