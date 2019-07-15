$(document).ready(function () {
    $('#perfil').show(); // quando carrega o documento, está já selecionado como perfil
    $('#refeicoesSubmetidas').hide();
    $('#submeterRefeicao').hide();


    $('#botaoPerfil').click(function () {
        $('#perfil').show();
        $('#refeicoesSubmetidas').hide();
        $('#submeterRefeicao').hide();
    });

    

    $('#botaoRefeições').click(function () {
        $('#refeicoesSubmetidas').show();
        $('#perfil').hide();
        $('#submeterRefeicao').hide();
    });

    $('#botaoSubmeterRefeicoes').click(function () {
        $('#refeicoesSubmetidas').hide();
        $('#perfil').hide();
        $('#submeterRefeicao').show();
    });

    $('#foodsubmitCancel').click(function () {
        var d = $('#submeterRefeicao');
        d.find('input[type = "text"]').val('');
        d.find('input[type = "number"]').val('');
        d.find('input[type = "file"]').val('');
        d.find('textarea').val('');
    });

    $('#foodsubmitSave').click(function () {
        alert("Refeição submetida com sucesso!");
        var d = $('#submeterRefeicao');
        d.find('input[type = "text"]').val('');
        d.find('input[type = "number"]').val('');
        d.find('input[type = "file"]').val('');
        d.find('textarea').val('');
    });
    
    
        
});