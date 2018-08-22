document.write('<style>.noscript { display: none; }</style>');

$(document).ready(function () {
    $( "#datanascimento" ).datepicker();

    $("#fone" )
    .mask("(99) 9999 9-9999")
    .focusout(function (event) {  
        var target, phone, element;  
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
        phone = target.value.replace(/\D/g, '');
        element = $(target);  
        element.unmask();  
        if(phone.length > 10) {  
            element.mask("(99) 9 9999-9999");  
        } else {  
            element.mask("(99) 9999-9999");  
        }  
    });

    $("#formulario").validate({
      rules:{
        datanascimento:{
          required: true, minlength: 10
        },
        nome:{
          required: true
        },
        email:{
          required: true, email: true
        },
        fone:{
          required: true, minlength: 14
        },
        estado:{
          required: true
        },
        cidade:{
          required: true
        }
      },

      messages:{
        datanascimento:{
          required: "<br><i><strong> * Digite a data de nascimento</strong></i>",
          minlength: "<br><i><strong> * Digite uma data válida</strong></i>"
        },
        nome:{
          required: "<br><i><strong> * Digite o seu nome</strong></i>"
        },
        email:{
          required: "<br><i><strong> * Digite o seu email</strong></i>",
          email: "<br><i><strong> * Digite um email válido</strong></i>"
        },
        fone:{
          required: "<br><i><strong> * Digite o seu telefone</strong></i>",
          minlength: "<br><i><strong> * O seu telefone deve conter, no mínimo, 8 caracteres</strong></i>"
        },
        estado:{
          required: "<br><i><strong> * Escolha o estado</strong></i>"
        },
        cidade:{
          required: "<br><i><strong> * Escolha a cidade</strong></i>"
        }
      }
  });

    $.getJSON('json/estados-cidades.json', function( data ) {
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


    // We only want these styles applied when javascript is enabled
    $('div.navigation').css({'width' : '300px', 'float' : 'left'});
    $('div.content').css('display', 'block');

    // Initially set opacity on thumbs and add
    // additional styling for hover effect on thumbs
    var onMouseOutOpacity = 0.67;
    $('#thumbs ul.thumbs li').opacityrollover({
      mouseOutOpacity:   onMouseOutOpacity,
      mouseOverOpacity:  1.0,
      fadeSpeed:         'fast',
      exemptionSelector: '.selected'
    });
    
    // Initialize Advanced Galleriffic Gallery
    var gallery = $('#thumbs').galleriffic({
      delay:                     2500,
      numThumbs:                 15,
      preloadAhead:              10,
      enableTopPager:            true,
      enableBottomPager:         true,
      maxPagesToShow:            7,
      imageContainerSel:         '#slideshow',
      controlsContainerSel:      '#controls',
      captionContainerSel:       '#caption',
      loadingContainerSel:       '#loading',
      renderSSControls:          true,
      renderNavControls:         true,
      playLinkText:              'Play Slideshow',
      pauseLinkText:             'Pause Slideshow',
      prevLinkText:              '&lsaquo; Previous Photo',
      nextLinkText:              'Next Photo &rsaquo;',
      nextPageLinkText:          'Next &rsaquo;',
      prevPageLinkText:          '&lsaquo; Prev',
      enableHistory:             false,
      autoStart:                 false,
      syncTransitions:           true,
      defaultTransitionDuration: 900,
      onSlideChange:             function(prevIndex, nextIndex) {
        // 'this' refers to the gallery, which is an extension of $('#thumbs')
        this.find('ul.thumbs').children()
          .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
          .eq(nextIndex).fadeTo('fast', 1.0);
      },
      onPageTransitionOut:       function(callback) {
        this.fadeTo('fast', 0.0, callback);
      },
      onPageTransitionIn:        function() {
        this.fadeTo('fast', 1.0);
      }
    });

});



jssor_1_slider_init = function() {

    var jssor_1_SlideshowTransitions = [
      {$Duration:500,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
      {$Duration:500,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
      {$Duration:1000,x:-0.2,$Delay:40,$Cols:12,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
      {$Duration:2000,y:-1,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$Jease$.$OutJump,$Round:{$Top:1.5}},
      {$Duration:1200,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}}
    ];

    var jssor_1_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};