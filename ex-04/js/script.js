$( function() {
	$( "#dataNascimento" ).datepicker();

	$("#telefone" )
	.mask("(99) 9999-9999?9")
	.focusout(function (event) {  
	    var target, phone, element;  
	    target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
	    phone = target.value.replace(/\D/g, '');
	    element = $(target);  
	    element.unmask();  
	    if(phone.length > 10) {  
	        element.mask("(99) 99999-999?9");  
	    } else {  
	        element.mask("(99) 9999-9999?9");  
	    }  
	});

	$("#cpf").mask('000.000.000-00', {reverse: true});

	$("#formulario").validate({
	    rules:{
	      dataNascimento:{
	        required: true, minlength: 10
	      },
	      rg:{
	        required: true, minlength: 6
	      },
	      cpf:{
	        required: true, 
	      },
	      telefone:{
	        required: true, minlength: 9
	      }
	    },

	    messages:{
	      dataNascimento:{
	        required: "Digite a data de nascimento",
	        minlength: "Digite uma data válida"
	      },
	      rg:{
	        required: "Digite o seu rg",
	        minlength: "O seu RG deve conter, no mínimo, 6 caracteres"
	      },
	      cpf:{
	        required: "Digite o seu cpf",
	        
	      },
	      telefone:{
	        required: "Digite o seu telefone",
	        minLength: "o seu telefone deve conter, no mínimo, 9 caracteres"
	      }
	    }
	});

});