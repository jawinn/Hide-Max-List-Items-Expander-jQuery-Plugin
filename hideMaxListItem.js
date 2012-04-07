// HIDE MAX LIST ITEMS JQUERY PLUGIN
// Version: 1.1
// Author: www.joshuawinn.com
// Usage: Open Source
(function($){
$.fn.extend({ 
hideMaxListItems: function(options) 
{
	// DEFAULT VALUES
	var defaults = {
		max: 3,
		speed: 1000,
		moreHTML:'<p class="maxlist-more"><a href="#">READ MORE</a></p>'
	};
	var options =  $.extend(defaults, options);
	var goingUp = 0;
	
	// FOR EACH MATCHED ELEMENT
	return this.each(function() {
		var op = options;
		var totalListItems = $(this).children("li").length;
		var speedPerLI;
		
		// Get animation speed per LI; Divide the total speed by num of LIs. 
		// Avoid dividing by 0 and make it at least 1 for small numbers.
		if ( totalListItems > 0 ) { 
			speedPerLI = Math.round( op.speed / totalListItems );
			if ( speedPerLI < 1 ) { speedPerLI = 1; }
		} else { 
			speedPerLI = 0; 
		}
		
		// If list has more than the "max" option
		if ( (totalListItems > 0) && (totalListItems > op.max) )
		{
			// Initial Page Load: Hide each LI element over the max
			$(this).children("li").each(function(index) {
				if ( (index+1) > op.max ) {
					$(this).hide(0);
					$(this).addClass('maxlist-hidden');
				}
			});
			// Add "Read More" button
			$(this).after(op.moreHTML);
			
			// Click events on "Read More" button: Slide up and down
			$(this).next(".maxlist-more").children("a").click(function(e)
			{
				// Get array of children past the maximum option 
				var listElements = $(this).parent().prev("ul, ol").children("li"); 
				listElements = listElements.slice(op.max);
				
				// Sequentially slideToggle the list items
				// For more info on this awesome function: http://goo.gl/dW0nM
				if ( goingUp == 0 ){
					var i = 0; 
					(function() { $(listElements[i++] || []).slideToggle(speedPerLI,arguments.callee); })();
				} else {
					var i = listElements.length - 1; 
					(function() { $(listElements[i--] || []).slideToggle(speedPerLI,arguments.callee); })();
				}
				
				// Switch directions
				if (goingUp == 0){goingUp = 1;} else {goingUp = 0;}
				
				// Prevent Default Click Behavior (Scrolling)
				e.preventDefault();
			});
		}
	});
}
});
})(jQuery); // End jQuery Plugin