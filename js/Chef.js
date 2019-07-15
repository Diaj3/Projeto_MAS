$(document).ready(function () {
    $("#perfil").show; // quando carrega o documento, está já selecionado como perfil
    $("#order_pannel").hide();

    $("#botaoPerfil").click(function () {
        $("#perfil").show();
        $("#order_pannel").hide();
    });
    $("#botaoEncomendas").click(function () {
        $("#order_pannel").show();
        $("#perfil").hide();
    });



});