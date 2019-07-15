$(document).ready(function () {
    $("#perfil").show; // quando carrega o documento, está já selecionado como perfil
    $("#historico").hide();
    $("#moradas").hide();
    $("#tracking").hide();

    $("#botaoPerfil").click(function () {
        $("#perfil").show();
        $("#historico").hide();
        $("#moradas").hide();
        $("#tracking").hide();
    });

    $("#botaoHistorico").click(function () {
        $("#perfil").hide();
        $("#historico").show();
        $("#moradas").hide();
        $("#tracking").hide();
    });

    $("#botaoMoradas").click(function () {
        $("#perfil").hide();
        $("#historico").hide();
        $("#moradas").show();
        $("#tracking").hide();
    });

    $("#botaoTracking").click(function () {
        $("#perfil").hide();
        $("#historico").hide();
        $("#moradas").hide();
        $("#tracking").show();
    });


    $('#cancelendereco').click(function () {
        var m = $('#modalnovoendereco');
        m.find('input[type = "text"]').val('');
        m.find('textarea').val('');
    });

    $('#guardaendereco').click(function () {
        alert("Endereço guardado com sucesso!");
        var m = $('#modalnovoendereco');
        m.find('input[type = "text"]').val('');
        m.find('textarea').val('');
    });


});