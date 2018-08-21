(function( $ ){

	$.fn.encryptText = function(){

		this.each(function() {
            var texto = $(this).html();

            texto = texto.replace(/a/g, 'ais');
            texto = texto.replace(/e/g, 'enter');
            texto = texto.replace(/i/g, 'inis');
            texto = texto.replace(/o/g, 'omber');
            texto = texto.replace(/u/g, 'ufter');

            $(this).html(texto);
        });

		return this;
	};

} (jQuery) );