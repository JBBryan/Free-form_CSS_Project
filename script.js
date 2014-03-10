// $(document).ready(function(){
//   alert("it fucking works!")
// });




$(document).ready(function(){
    $(".slider-que").on("click", function(){
      $(this).fadeOut(100);
      $(".slide-up").slideToggle(1000)
    });

    $(".exit-box").on("click", function(){
      $(".slide-up").slideToggle(1000);
      $(".slider-que").fadeTo(1000, 100)
    })


});

