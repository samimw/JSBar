JSBar
=====

JSBar is a small and customizable notification bar. 

It can sit on top or bottom of you page, where you can show information to users in two sections of the bar.

For its section text you can pass html text as parameter and customize your text accordignly.

As it is using css you can change the image of close button or style it as per your needs.

Configuration:
=============

1 - On your page add the following : 

Add reference to Jquery library : <script src="libs/jquery-1.11.1.min.js"></script>
Add reference to JSBar : <script src="scripts/JSBar.1.0.js"></script>
Add reference to stylesheet : <link rel="stylesheet" type="text/css" href="css/JSBar.css" />

2 - initialize the plugin by : 

<script>
$(function(){
	$("body").JSBar();
});
</script>

3 - You have the ablitiy to customize : 

   > centertext - the text that appears in center section of bar.
   > lefttext - the text that appears in left section of bar.
   > background - the background color of the bar. (you can pass ascii color or normal color names)
   > position - the page position of the bar e.g. top or bottom.
   
To pass these parameters do :

	$("body").JSBar({ 
		position : 'bottom', 
		lefttext : '<div>my left text from parameter</div>' ,
		centertext : '<span style="color:red">span in center text</span>',
		background: '#000'
	});
	
Enjoy and let me know if you feel it needs to be improved!
