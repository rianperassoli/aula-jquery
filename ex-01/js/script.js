$(document).ready(function() {
	//exercicio 2-1
	$('#form1').append('<button id="bt-limpar" >Limpar</button>');

	//exercico 4
	$( "li" ).each(function( index ) {
		$('li:eq(2)').css('color', '#FF0');
	});

	//exercicio 3
	$( "label" ).css("color", "red");

    $("form").on("submit", function (event) {
        event.preventDefault();
        console.log($(this).serializeArray());
    });

    $("#bt-enviar").click(function(){
    	//exercicio 1 
    	$('input[type!=submit]').css('background', 'white');

		$('input[type!=submit]').each(function() {
		    if ($(this).val().length == 0) $(this).css('background', 'red')
		});

		//exercicio 6
		//$( "li:eq(0)" ).fadeOut().delay(2000).fadeIn();

		//exercicio 6
		$( "li:eq(0)" ).toggle(500);
    });

    $("#bt-limpar").click(function(){
    	//exercicio 2-2
		$("input[type!=submit]").each(function(){
			if ($(this).val(""));
		});
    });

    //exercicio 5
    $('#lista-exercicios').append('<li>Mais um item</li>');
});

