$(function() {
  var $blocks = $('.animBlock.notViewed');
  var $window = $(window);

  $window.on('scroll', function(e){
    $blocks.each(function(i,elem){
      if($(this).hasClass('viewed')) 
        return;
        
      isScrolledIntoView($(this));
    });
  });
});

/* http://stackoverflow.com/a/488073/477958 */
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).outerHeight(true)

   // Check whether the element is taller than the window
   if (elemTop + elemBottom >= docViewBottom + 10) {
      // this element must be made visible
      $(elem).removeClass('notViewed').addClass('viewed');
   }

  // Check without an offset
  if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
    // once an element is visible exchange the classes
    $(elem).removeClass('notViewed').addClass('viewed');
    
    var animElemsLeft = $('.animBlock.notViewed').length;
    if(animElemsLeft == 0){
      // with no animated elements left debind the scroll event
      $(window).off('scroll');
    }
  }
}