/*** Global var ***/

/*** Document Load ****/
$(document).ready(function(){
  $("#hamburger-icon").click(function(){
      $("body").prepend("<!-- the menu bar --> <div class='menu-bg is-clipped' id='menu-bg'> <div class='l-main'> <div class='l-menu'> <div class='col-2-left'> <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='230px' height='18px' viewBox='0 0 230 18' xml:space='preserve'> <g id='Low-Fi' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' font-weight='700' font-family='GTAmerica-ExtendedBlack, GT America' letter-spacing='2' font-size='22' font-style='expanded'> <g id='Landing-Page' transform='translate(-94.000000, -56.000000)' fill='#FFFFFF'> <text id='STEVEN-JI-X-PUI'> <tspan x='95' y='72.2377748'>STEVEN JI X PUI</tspan> </text> </g> </g> </svg> </div> <div class='col-2-right'> <ul> <li><a href='project1.html'>Good/Bad UI</a> </li> <li><a href='project2.html'>Paper to Interactive Prototyping</a></li> <li> <a href='project3.html'>Coding & Munching</a> </li> <li><a href='project4.html'>Implementing a web portfolio</a></li></ul> </div> </div> </div> </div>")
      
      $("#menu-bg:not(li)").click(function(e){
        console.log(e)
        $("#menu-bg").remove()
      })
    
    })

  // scroll animation for home page
   $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
          $("body.home").attr("id","change-color");
          $("body.project-1-bg").attr("id","change-color");
         $("body.project-2-bg").attr("id","change-color");
         $("body.project-3-bg").attr("id","change-color");
         $("body.project-4-bg").attr("id","change-color");
          $('.navbar').fadeOut(500);

      }
      if ($(this).scrollTop() < 400) {
         $("body.home").removeAttr("id");
         $("body.project-1-bg").removeAttr("id","change-color");
          $("body.project-2-bg").removeAttr("id","change-color");
          $("body.project-3-bg").removeAttr("id","change-color");
          $("body.project-4-bg").attr("id","change-color");
         $('.navbar').fadeIn(100);
        }
     });


   $("#project-1.col-2").hover(function(){
        var cssSelector = anime({
        targets: '#project-1 .el',
        translateY: -150
        });
     }, function(){
        var cssSelector = anime({
        targets: '#project-1 .el',
        translateY: 0
        });
     });

   $("#project-2.col-2").hover(function(){
        var cssSelector = anime({
        targets: '#project-2 .el',
        translateY: -150
        });
     }, function(){
        var cssSelector = anime({
        targets: '#project-2 .el',
        translateY: 0
        });
     });

   $("#project-3.col-2").hover(function(){
        var cssSelector = anime({
        targets: '#project-3 .el',
        translateY: -150
        });
     }, function(){
        var cssSelector = anime({
        targets: '#project-3 .el',
        translateY: 0
        });
     });

   $("#project-4.col-2").hover(function(){
        var cssSelector = anime({
        targets: '#project-4 .el',
        translateY: -150
        });
     }, function(){
        var cssSelector = anime({
        targets: '#project-4 .el',
        translateY: 0
        });
     });

   $("#project-5.col-2").hover(function(){
        var cssSelector = anime({
        targets: '#project-5 .el',
        translateY: -150
        });
     }, function(){
        var cssSelector = anime({
        targets: '#project-5 .el',
        translateY: 0
        });
     });


    $("#project-6.col-2").hover(function(){
        var cssSelector = anime({
        targets: '#project-6 .el',
        translateY: -150
        });
     }, function(){
        var cssSelector = anime({
        targets: '#project-6 .el',
        translateY: 0
        });
     });



});