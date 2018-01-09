var buttonTracker = 0;
$(function(){
  $(".col-md-2").click(function(){
    if (buttonTracker === 1){
      $(this).children("p").toggle();
      $(this).children("img").toggle();
      $(this).children("h3").toggle();
    }
    else{
      $(this).children("p").fadeToggle();
      $(this).children("img").fadeToggle();
      $(this).children("h3").fadeToggle();
      console.log(buttonTracker);
    }
  });

$("button#orange").click(function(){
   $("body").removeClass();
   $("body").addClass("orange-background");
});

$("button#blue").click(function(){
  $("body").removeClass();
  $("body").addClass("blue-background");
});

$("button#toggleAct").click(function(){
  if (buttonTracker === 0){
    buttonTracker = 1;
  }
  else{
    buttonTracker = 0;
  }
});
});
