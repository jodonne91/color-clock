//variables for which clock to display
  var type = true;



//set intervals and bind listeners on document ready

$(document).on("ready", function() {


  setInterval('setTime(type)', 1000);
  setInterval('setHex(type)', 1000);

  $(".clockDiv").click(function() {  
    $(".clockDiv").toggleClass('hidden')
    $(".hexDiv").toggleClass('hidden')
  })

  $(".hexDiv").click(function() {  
    $(".clockDiv").toggleClass('hidden')
    $(".hexDiv").toggleClass('hidden')
  })

})


//Below are the functions for setting the elements displayed on screen

function setTime() 
{
  
  {
    var color = getColor();
    var time = getTime();
    // var hexColor = getHex();

    var clockTime = "<h1 class = 'clock'>" + time + "</h1>";
    // var hexCode = "<h1 class='hex'>" + hexColor + "</h1>"
    $(".background").css("background-color", color);

    $(".clock").remove();
    $(".clockDiv").append(clockTime);
  }

}

function setHex()
{

  {  
    var hexColor = getHex();
    //var color = getColor();

    // var clockTime = "<h1 class = 'clock'>" + time + "</h1>";
    var hexCode = "<h1 class='hex'>" + hexColor + "</h1>"
    //$(".background").css("background-color", color);

    $(".hex").remove();
    $(".hexDiv").append(hexCode);
  }

}



//Below are the functions for producing the correct color and time codes

function getColor() 
{
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();

  var hour = Math.round((h / 23) * 255)
  var minute = Math.round((m / 59) * 255);
  var sec = Math.round((s / 59) * 255)

  var color = 'rgb(' + hour + ',' + minute + ',' + sec + ')';

  //console.log(color)

  return color;

}

function getHex() {

   var time = new Date();
   var h = time.getHours();
   var m = time.getMinutes();
   var s = time.getSeconds();

   var first = numToHex(h);
   var second = numToHex(m);
   var third = numToHex(s);

   return ("#" + first + second + third);
}



function getTime() 
{
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();

  if( h < 10 ){ h = '0' + h; }
  if( m < 10 ){ m = '0' + m; }
  if( s < 10 ){ s = '0' + s; }

  var clockTime = h + ":" + m + ":" + s;

  return clockTime;

}



/* 

converts number from 0-15 to hexidecimal value

*/


function hex(num)
{
  if (num >15){
    return null
  }
  
  letters = ['A','B','C','D','E','F']
  if (num > 9)
  {
    return letters[(num-10)];
  }
  return ("" + num);
}

/*

converts larger numbers to hexidecimal using above function

*/

function numToHex(num)
{
  var rem = [];

  var temp = num;

  var i = 0;

  while (temp > 0)
  {
    rem[i] = hex(temp % 16);

    temp = Math.floor(temp/16);

    i++

  }

  return rem.reverse().join("")

}



/*
  This function takes in two parameters: a number, and a string.
  The number represents the amount of hours/minutes/seconds.
  The string represents the unit, and is one of
    * "hour"
    * "minute"
    * "second"

  It returns a whole number value from 0-255 representing the
  relative CSS RGB value of that time period.

  It's pre-written for you. Best to not muck around with it.
*/
var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}