var lastValue;

function limparGrid(){
	$('#t1 tr td').text("");
}

function setarIds(){
	var contador = 0;

	$('#t1 tr td').each(function(){
		$(this).attr('id', contador++);
	});
}

function getValue(){
	if (lastValue == "X") {
		lastValue = "O"
		return "O";
	} else {
		lastValue = "X"
		return "X"
	}
}

function addWinnerMessage(){
	$('body').append("<p id='winMessage'>Vencedor: " + lastValue + "</p>");

	mostraButtonReiniciar();
}

function restart(){
	lastValue = "";
	
	limparGrid();

	$('#winMessage').hide();
	$('#reiniciar').hide();
}

function hasWinner(){

	if (iguais($('#0').text(), $('#1').text(), $('#2').text())) {
		return true;
	} else if (iguais($('#3').text(), $('#4').text(), $('#5').text())) {
		return true;
	} else if (iguais($('#6').text(), $('#7').text(), $('#8').text())) {
		return true;
	} else if (iguais($('#0').text(), $('#3').text(), $('#6').text())) {
		return true;
	} else if (iguais($('#1').text(), $('#4').text(), $('#7').text())) {
		return true;
	} else if (iguais($('#2').text(), $('#5').text(), $('#8').text())) {
		return true;
	} else if (iguais($('#0').text(), $('#4').text(), $('#8').text())) {
		return true;
	} else if (iguais($('#2').text(), $('#4').text(), $('#6').text())) {
		return true;
	}

	return false;
}

function iguais(valor1, valor2, valor3){
	if ((valor1.length > 0) && (valor2.length > 0) && (valor3.length > 0)) {
		if ((valor1 == valor2) && (valor1 == valor3) && (valor2=valor3)) {
			return true;
		}
	}
	return false;
}

function mostraButtonReiniciar(){
	$('body').append("<button id='reiniciar' onclick='restart()'>Reiniciar</button>");
}

function allFieldsUsed(){

	$('#t1 tr td').each(function(){
		if ($(this).html() == ""){
			return false;
		}
	});

	return true;
}

$(document).ready(function() {
	limparGrid();

	setarIds();

	$('#t1 tr td').click(function(){

		if ($(this).text().length == 0){

			$(this).text(getValue());

			if (hasWinner()){
				addWinnerMessage();
			} else if (allFieldsUsed()) {
				mostraButtonReiniciar();
			}
		} 
	});	

});