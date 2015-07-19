$(document).ready(function() {

  var g = $(".greeting"),
      time = new Date(),
      h = time.getHours();
  if (h>18){
    g.text("\tGood evening, I am")
  }
  else if(h>12){
    g.html("    Good afternoon, I am");
  }
  else {
    g.html("    Good morning! I am")
  }
})
