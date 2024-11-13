

$(function(){
  
  $("#fixMenu ul li a, .menuBlock ul a").not("#fixMenu .menuBtn a").on("click", function(){
    $("#fixMenu .menuBtn a").removeClass("on");
    $("#modalMenu").fadeOut();
  });

  $(".scheduleList dt").on("click", function(){
    $(this).toggleClass("on");
    $(this).next("dd").slideToggle();
  });
	
	
});
