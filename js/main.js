$(document).ready(function(){
  $('.slider').slider({
  	full_width: false,
  	height: 550,
  	indicators: false
  });

  $('.carousel').carousel({dist: -100, full_width: false});
		var timerId = setTimeout(function tick() {
    	$('.carousel').carousel('next', [1]);
      	timerId = setTimeout(tick, 5000);
    }, 5000);

  var a = $('#height').height();
  $('.size').height(a - 50);
});