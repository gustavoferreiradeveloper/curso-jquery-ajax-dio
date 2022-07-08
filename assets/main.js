function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    $.ajax({
        url:`https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(response){
            console.log(response);
            $('#cepRequisition').html("CEP: "+response.cep);
            $('#logradouro').html(response.logradouro);
            $('#complemento').html(response.complemento);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});