$(document).ready(function () {
    $.getJSON('estados-cidades.json', function( data ) {
        var itens = '<option value="">- Selecione um estado -</option>';

        $.each(data.estados, function (key, val) {
            itens = itens + '<option value="' + val.sigla + '">' + val.nome + '</option>';
        });

        $('#estado').html(itens);

        $('#estado').change(function () {

			var itensCidades = '';

			var estado = $('#estado').find(":selected").text();					

			$.each(data.estados, function (key, val) {

				if(val.nome == estado) {
					itensCidades = '<option value="">- Selecione uma cidade de '+ estado +'-</option>';	

					$.each(val.cidades, function (keyCidade, valCidade) {
						itensCidades += '<option value="' + keyCidade + '">' + valCidade + '</option>';
					});							
				}
			});
			$("#cidade").html(itensCidades);
        	
        }).change();
    });

});