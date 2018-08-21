(function( $ ){

	var cor = "#556b2f"

	$.fn.greenify = function(){
		this.css("color", cor);
		return this;
	};

} (jQuery) );

$( function() {
	$("label").greenify();
});