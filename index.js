

$(document).on("ready", function() {
  setInterval(setTime, 1000);
})

function setTime() 
{
  
  var color = getColor();
  var time = getTime();


  var clockTime = "<h1 class = 'clock'>" + time + "</h1>";

  $(".background").css("background-color", color);

  $(".clock").remove()
  $(".clockDiv").append(clockTime)

}


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