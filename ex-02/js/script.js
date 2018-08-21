$(document).ready(function() {
	ocultaItems();

	//deixa a linha inteira como link
	$('a').css('display', 'block');

	//item 1
	$('#menu h2').click(function(){
		ocultaItems();
				
		$(this).next('ul').slideDown(500);
	});

	//item 2
	$('#menu li').click(function(){
		$(this).toggleClass('red');
	});

	//item3
	$('#exercicios').hide();
});


function ocultaItems(){
	$('#menu ul').slideUp();
}
