(function ($) {
	$.fn.JSBar = function(options){
		var settings = $.extend({
			centertext		:	'JS Bar',
			lefttext		:	'Left Text',
			background		:	'#39B3D7',
			position		:	'top'
		}, options);
	
		this.append("<div id='jsbar' class='jsbar-wrapper "+ settings.position +"' style='"+ settings.position +":0;'></div>");
		
		if(settings.position === 'bottom'){
			$("#jsbar").prepend("<div class='jsbar-bottom'></div>");
		}
		
		$("#jsbar").append("<table id='tblJsbar' class='jsbar-container'><tbody></tbody></table>" );
			
		if(settings.position === 'top'){			
			$("#jsbar").append("<div class='jsbar-bottom'></div>");
		}
		
		$(".jsbar-container").css("background-color", settings.background);
		
		$("#tblJsbar").append("<tr>" +
				"<td class='jsbar-left-text' style='height: 30px; width: auto;'>" +
					"<div class='jsbar-left-text-inner' style='opacity: 100; max-height: 30px; min-height: 15px'>" + settings.lefttext + "</div>" +
				"</td>" +
				"<td class='jsbar-spacer' style=width:50px;'></td>"+
				"<td class='jsbar-center-text' style='height: 30px; width: 50%;'>" +
					"<div class='jsbar-center-text-inner' style='opacity: 100; max-height: 30px; min-height: 15px'>" + settings.centertext + "</div>" +
				"</td>" +
				"<td class='jsbar-spacer'></td>"+
				"<td class='jsbar-btnclose' style='width:80px'>" +
					"<span class='jsbar-close' style='height:30px' />" +
				"</td>" +
			"</tr>");
		
		$("#jsbar").append("<div class='jsbar-open-button-container' style='height: 0px; bottom: auto; "+ settings.position +": 0px; right: 0px; left: auto; width: 56px;'><span class='jsbar-open-button' style='height: 0px;'></span></div>");
		
		$(".jsbar-btnclose").click(function(){
			$("#jsbar").animate({
				height : "3px",
				}, 250, function() {
					$("#tblJsbar").css("display", "none");
					$(".jsbar-open-button-container").css("height", "32px");
					$(".jsbar-open-button").css("height", "32px");
			});
		});
		
		$(".jsbar-open-button").click(function(){
			if(settings.position === 'top'){					
				$(".jsbar-open-button").animate({
						height : "0px",
					}, 250, function() {
							$(".jsbar-open-button-container").css("height", "0px");
							$("#jsbar").css("height", "43px");
							$("#tblJsbar").css("display", "table");
							
				});
			}
			else if(settings.position === 'bottom'){			
				$(".jsbar-open-button-container").animate({
						height : "0px",
					}, 250, function() {
							$(".jsbar-open-button-container").css("height", "0px");
							$("#jsbar").css("height", "43px");
							$("#tblJsbar").css("display", "table");
							
				});		
			}
		});
		return this;
	}
}(jQuery));