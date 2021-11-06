/* =============================================================================
   CORE PREMIUMPRESS JQUERY STYLES // UPDATED 28TH MARCH
   ========================================================================== */



/*
 GALLERY IMAGE SWITCHED (THUMB/LIST)
*/
jQuery(document).ready(function() { 
	jQuery("a.switch_thumb").toggle(function(){										
		jQuery(this).addClass("swap");
		jQuery("ul.display").fadeOut("fast", function() {
		jQuery(this).fadeIn("fast").addClass("thumb_view");
		});		
		}, function () {
		jQuery(this).removeClass("swap");
		jQuery("ul.display").fadeOut("fast", function() {
		jQuery(this).fadeIn("fast").removeClass("thumb_view");
		});
		
	}); 		
 
}); 
/*
LAYER TOGGLE FUNCTION
*/
function toggleLayer( whichLayer )
{
  var elem, vis;
  if( document.getElementById ) 
    elem = document.getElementById( whichLayer );
  else if( document.all ) 
      elem = document.all[whichLayer];
  else if( document.layers ) 
    elem = document.layers[whichLayer];
  vis = elem.style;
 
  if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined)    vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';  vis.display = (vis.display==''||vis.display=='block')?'none':'block';
}
/*
QTY CHECKER
*/
function CheckRemaindingQty(total){

	FindQty = jQuery("#CustomQty").text();
	if(FindQty ==""){ FindQty=1; }
	
	ThisQty = document.getElementById('QtyTotal').value; 
	Remain = FindQty*1 + ThisQty*1;
	
	document.getElementById('QtyTotal').value = Remain ;
	 
	if( (  total*1 - Remain*1  ) < 1){ 
	
	//document.getElementById('QtyTotal').disabled=true; 
	 
	} 

}




function CheckMessageData(a,b,c,text){
	 
	if(a =='' || b =='' || c ==''){
	
		alert(text);
		return false;
	
	}
	
	return true;
	
	
}

function countWords(heyslay){
	heyslay=heyslay.split("\n").join(" ");
	chocolate=heyslay.split(" ");
	heyslay=0;
	for(da=0;da<chocolate.length;da++){
		if(chocolate[da].length>0){
			heyslay++;
		}
	}
	return heyslay;
}




/* =============================================================================
   PREMIUMPRESS STYLES  // DEVELOPED BY MARK FAIL
   ========================================================================== */
 
function ppt_confirm(text1){var r=confirm(text1);if (r==true){  return true;  }else  {  return false; }}
 


jQuery(document).ready(function() {

	jQuery(".tab_content").hide();	
	jQuery(".tabs li:first-child").addClass("active");
	jQuery(".tab_content:first-child").show();

	//////////
	// tabs //
	//////////
	jQuery(".tabs li").click(function() {
		if (!jQuery(this).hasClass("active")) {
			jQuery(this).parent().find("li").removeClass("active");
			jQuery(this).parent().next().find(".tab_content").hide();
			
			var activeTab = jQuery(this).find("a").attr("href");
			jQuery(this).addClass("active");
			jQuery(this).parent().next().find(activeTab).fadeIn();
		}
		return false;
	});
	
	  
    jQuery(".page_content").hide();	 
    jQuery(".page_tabs li:first").addClass("active").show(); //Activate first tab
    jQuery(".page_content:first").show(); //Show first tab content
	
    jQuery(".page_tabs li").click(function() {
            jQuery(".page_tabs li").removeClass("active"); //Remove any "active" class
            jQuery(this).addClass("active"); //Add "active" class to selected tab
            jQuery(".page_content").hide(); //Hide all tab content
            var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            jQuery(activeTab).fadeIn(); //Fade in the active content
            return false;
            
    });
	 
	
	
	/////////////
	// toggles //
	/////////////
	jQuery(".toggle .container").hide();
	jQuery('.toggle .trigger.active').addClass('active').next().show();

	jQuery(".toggle .trigger").click(function(){
		jQuery(this).toggleClass('active').next().slideToggle();
		return false;
	});

	///////////////
	// accordion //
	///////////////
	jQuery('.accordion .container').hide();
	jQuery('.accordion .trigger:first-child').addClass('active').next().show();
	
	jQuery('.accordion .trigger').click(function() {
		if(jQuery(this).next().is(':hidden')) {
			jQuery(this).parent().find(".trigger").removeClass('active').next().slideUp('fast');
			jQuery(this).toggleClass('active').next().slideDown('fast');
		}
		return false;
	});
	
	// IMAGE
	/* apply jobs actions */
	//jQuery(".showme").colorbox();				
 
	
});

/* =============================================================================
   RIBBON STYLES
   ========================================================================== */
 
jQuery(function(){
		if( jQuery.browser.msie && jQuery.browser.version <= 9 ) {
			// remove 'stitch' class
			jQuery('div.stitch').removeClass('stitch');
				
			// remove 'strip' class
			jQuery('div.strip').removeClass('strip');
		}
});

/* =============================================================================
   CUSTOM TAXONOMNY CHECKING FOR SUBMISSION PAGES
   ========================================================================== */

function CheckTaxonomyFieldValue(val, div){
	
	if(val=="new"){
		
		jQuery('#newselectionform_'+div).html('<br /><input type="text" name="'+div+'_new" id="'+div+'_new" class="short" style="background: #E2F2CE;">');
	}else{
		
		jQuery('#newselectionform_'+div).html("");
	}
	
	
}