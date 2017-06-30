jQuery(document).ready(function() { 
	/* Mobile Devices Navigation Script */
	(function ($) { 
		$('a.button_menu').on('click', function () { 
			if ($(this).hasClass('active')) {
				$('.nav_menu').css( { 
					display : 'none' 
				} );
				$(this).removeClass('active');
			} else {
				$('.nav_menu').css( { 
					display : 'block' 
				} );
				
				$(this).addClass('active');
			}
			
			return false;
		} );
		
		$(window).bind('resize', function () { 
			if ($(this).width() > 768) {
				$('a.button_menu').removeClass('active');
				$('.nav_menu').removeAttr('style');
			}
		} );
	} )(jQuery);
	$('.bordo-circle').hover(function(){
		if($(this).hasClass('bordo-circle-1')) {
			$('#bordo-line-1 > div').addClass('line-white1');
		}
		if($(this).hasClass('bordo-circle-2')) {
			$('#bordo-line-2 > div').addClass('line-white1');
		}
		if($(this).hasClass('bordo-circle-3')) {
			$('#bordo-line-3 > div').addClass('line-white1');
		}
	},function(){
		if($(this).hasClass('bordo-circle-1')) {
			$('#bordo-line-1 > div').removeClass('line-white1')
		}
		if($(this).hasClass('bordo-circle-2')) {
			$('#bordo-line-2 > div').removeClass('line-white1')
		}
		if($(this).hasClass('bordo-circle-3')) {
			$('#bordo-line-3 > div').removeClass('line-white1')
		}
	})

} );


$(function(){
    
    $("a#my-search.ex-link-inited").on("click", function (e) {
		window.location.replace("search/");
    });
		
});

$(document).ready(function() {
	
	var modal = $("div#myModal.modal");	
	if (!modal.length) return;
	
	var lnk = $("a#MyModalLink.news-block");
	if (!lnk.length) return;
	
	lnk.click(function() {
		
		$("div.modal-content").load('modal_data.php?id=' + $(this).attr('data'));
		
		$("html, body").animate({ scrollTop: 0 }, "slow");
		modal.css("height", $(document).height());
		modal.css("display", "block");
		$('body').css('background-color','rgba(0,0,0,0.6)');	
		
		return false

	});
	
});


$(document).ajaxComplete(function(){
    // fire when any Ajax requests complete
	
	var a = $("a.btn-link-inited");
	if (!a.length) return;
	var b = $("div.modal-header-share-line");
	if (!b.length) return;
	var c = $("div.modal-header-share-btn-top-icon");
	if (!c.length) return;
	var d = $("h2.modal-header-title");
	if (!d.length) return;

	b.hide();
	c.hide();
	
	a.click(function() {
        if (!b.is(":visible")) {
			b.show();
		} else {
			b.hide();
		}
		return false;
    });
	
	a.on({
		mouseenter: function () {
			c.show();
			c.fadeTo("slow", 1);
			d.fadeTo("slow", 1);
		},
		mouseleave: function () {
			if (b.is(":visible")) {
				c.show();
				c.fadeTo("slow", 0.33);
				d.fadeTo("slow", 0.33);
			} else {
				c.hide();
			}
		}
	});
	
	var b = $("div.modal-header-share-line");
	if (!b.length) return;
	b.hide();

	var modal = $("div#myModal.modal");	
	if (!modal.length) return;
	
	var span = $("a.close-link");
	if (!span.length) return;	
	
	span.click(function() {
		$("div.modal-content").html("&nbsp;");
		modal.css("display", "none");
		$('body').css('background-color','white');
		return false;
	});	
	
})

$(window).load(function() {

});
