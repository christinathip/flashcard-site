var buttonTracker = 0;
var rave = false;
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
    else {
      buttonTracker = 0;
    }
  });
  $("button#rave").click(function(){
    if (rave === false) {
      rave = true;
    } else {
      rave = false;
    }
    setInterval(function(){
      if (rave === true) {

    //  $("body").css('background-color', generateThreeRand());
      first=generateNumberAndHex();
      second=generateNumberAndHex();
      third=generateNumberAndHex();
      rgb="#"+first+second+third;
      rgb2="#"+ second+first+third;
      rgb3="#"+ third+first+second;
      console.log(rgb);
      $("body").css('background-color', rgb);
      $(".jumbotron").css('background-color', rgb2);
      $("h1").css('color', rgb3);
    }
    }, 500)
  });
  var generateNumberAndHex = function() {
     rand = Math.floor(Math.random()*155 + 100);
     stringRand = rand.toString(16);
     returnRand =stringRand;
     return returnRand;
  };

});
