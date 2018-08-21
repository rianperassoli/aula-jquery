(function( $ ){

	$.fn.addImageSubtitles = function(){

		this.each(function() {
            var image = $( this );
            image.after( "<p class='subtitle'>" + image.attr( "alt" ) + "</p>" );
        });

		return this;
	};

} (jQuery) );