$(function(){

  $(".col-md-2:first-child").click(function() {
      $(".col-md-2:first-child h3").toggle();
      $(".col-md-2:first-child img").toggle();
      $(".col-md-2:first-child p").toggle();
  });
  $(".col-md-2:nth-child(2)").click(function() {
      $(".col-md-2:nth-child(2) h3").toggle();
      $(".col-md-2:nth-child(2) img").toggle();
      $(".col-md-2:nth-child(2) p").toggle();
  });
  $(".col-md-2:nth-child(3)").click(function() {
      $(".col-md-2:nth-child(3) h3").toggle();
      $(".col-md-2:nth-child(3) img").toggle();
      $(".col-md-2:nth-child(3) p").toggle();
  });
  $(".col-md-2:nth-child(4)").click(function() {
      $(".col-md-2:nth-child(4) h3").toggle();
      $(".col-md-2:nth-child(4) img").toggle();
      $(".col-md-2:nth-child(4) p").toggle();
  });
  $(".col-md-2:nth-child(5)").click(function() {
      $(".col-md-2:nth-child(5) h3").toggle();
      $(".col-md-2:nth-child(5) img").toggle();
      $(".col-md-2:nth-child(5) p").toggle();
  });
  $(".col-md-2:last-child").click(function() {
      $(".col-md-2:last-child h3").toggle();
      $(".col-md-2:last-child img").toggle();
      $(".col-md-2:last-child p").toggle();
  });
  $("#toggleChange").onClick(function(){
    $("body").removeClass();
    $("body").addClass("orange-background");
  });
});
