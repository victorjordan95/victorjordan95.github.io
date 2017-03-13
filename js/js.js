		$( ".cog" ).on( "click", function(){
				$( ".menu" ).stop().fadeToggle( "0.5" );
			});
			
			$( ".menu-link" ).on( "click", function(){
				$( ".menu" ).stop().fadeOut( "fast" );
			});
			$( "header, .section-zallium" ).on( "click", function(){
				$( ".menu" ).fadeOut( "fast" );
			});

			$(document).ready(function () {
			    function filterPath(string) {
			        return string
			            .replace(/^\//, '')
			            .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
			            .replace(/\/$/, '');
			    }
			    $('.menu-link a[href*=#]').each(function () {
			        if (filterPath(location.pathname) == filterPath(this.pathname)
			                && location.hostname == this.hostname
			                && this.hash.replace(/#/, '')) {
			            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
			            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			            if ($target) {
			                var targetOffset = $target.offset().top;
			                $(this).click(function () {
			                    if($(window).width() > 200){
			                        $('html, body').animate({scrollTop: targetOffset}, 800);
			                        return false;
			                    }
			                });
			            }
			        }
			    });
			});
			


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

AOS.init({
 duration: 1200
});