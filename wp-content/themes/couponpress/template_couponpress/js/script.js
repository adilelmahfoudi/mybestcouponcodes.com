jQuery(document).ready(function(){

	// Blur images on mouse over
	jQuery(".portfolio a").hover( function(){ 
		jQuery(this).children("img").animate({ opacity: 0.75 }, "fast"); 
	}, function(){ 
		jQuery(this).children("img").animate({ opacity: 1.0 }, "slow"); 
	}); 
	
	// Initialize prettyPhoto plugin
	jQuery(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false
	});

	// Clone portfolio items to get a second collection for Quicksand plugin
	var $portfolioClone = jQuery(".portfolio").clone();
	
	// Attempt to call Quicksand on every click event handler
	jQuery(".filter a").click(function(e){
		
		jQuery(".filter li").removeClass("current");	
		
		// Get the class attribute value of the clicked link
		var $filterClass = jQuery(this).parent().attr("class");

		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		
		// Call quicksand
		jQuery(".portfolio").quicksand( $filteredPortfolio, { 
			duration: 800, 
			easing: 'easeInOutQuad' 
		}, function(){
			
			// Blur newly cloned portfolio items on mouse over and apply prettyPhoto
			jQuery(".portfolio a").hover( function(){ 
				jQuery(this).children("img").animate({ opacity: 0.75 }, "fast"); 
			}, function(){ 
				jQuery(this).children("img").animate({ opacity: 1.0 }, "slow"); 
			}); 
			
			jQuery(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
				theme:'light_square', 
				autoplay_slideshow: false, 
				overlay_gallery: false, 
				show_title: false
			});
		});


		jQuery(this).parent().addClass("current");

		// Prevent the browser jump to the link anchor
		e.preventDefault();
	})
});