$(document)
  .ready(function() {
    var g = $(".greeting"),
      time = new Date(),
      h = time.getHours();

    if (h > 18) {
      g.text("\tGood evening, I am");
    } else if (h > 12) {
      g.html("    Good afternoon, I am");
    } else {
      g.html("    Good morning! I am");
    }

    $('a').click(function() {
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href'))
          .offset()
          .top
      }, 900);
      return false;
    });

  })
