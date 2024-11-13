

$(function(){

  $("#fixMenu .menuBtn a, .fixBtn .menuBtn a").on("click", function(){
    $(this).toggleClass("on");
    $("#modalMenu").fadeToggle();
    $(".fixArea .news").fadeToggle();
    return false;
  });
  
  $('.ytClose').click(function() {
		$(".opYT").addClass("close");
		setTimeout(function() {
			$('.opYT').remove();
		}, 1000);
		return false;
	});
	$(window).scroll(function (){
		$(".opYT").addClass("close");
		setTimeout(function() {
			$('.opYT').remove();
		}, 1000);
	});

  $(".pageSelect a").on("click", function(){
    var page = $(this).attr("href");
    $(".modalWrap").not(page).fadeOut();
    $(page).fadeIn();
  });
  
  $(".close").on("click", function(){
    $(".modalWrap").fadeOut();
  });
	
});