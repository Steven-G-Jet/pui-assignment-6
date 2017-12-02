

// hello world

$(document).ready(function(){

  // scroll animation
   $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
          console.log("hello world");
          $('.navbar').fadeOut(500);
         $("body#project-1-bg").addClass("change-color");

      }
      if ($(this).scrollTop() < 400) {
         $("body#project-1-bg").removeClass("change-color");
         $('.navbar').fadeIn(100);
        }
     });



});