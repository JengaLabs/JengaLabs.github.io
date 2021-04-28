
//When user scrolls 
$(window).scroll(function() {
    
   $('.intersection').each(function(i) {
  
    $window = $(window);
    var increase = i * 50
    var newHeight = $(".intersection").outerHeight();
    var newWidth = $(".intersection").outerWidth();
    var distance = $(this).parent().offset().top + newHeight

    if ($window.scrollTop() >= distance) {
      $(this).addClass('sticked').css("transform", "translate(100%," + increase + "px) scale(.8)");
      $(this).parent().css({"height": newHeight, "width": newWidth });
   
    }
    else {
      $(this).removeClass('sticked').css("transform", "translate(0px, 0px)");
    }
  });  
    
    
    
});