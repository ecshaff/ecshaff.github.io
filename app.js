$('a[href*="#"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });
$('.submit').click(function(){

    const email = $('.email').val()
    const subject = $('.subject').val()
    const message = $('.message').val()
    const statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append("<div>email is valid</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>email is not valid</div>")
    }

    if(subject.length > 0) {
      statusElm.append("<div>subject is valid</div>")
    } else { 
      event.preventDefault()
      statusElm.append("<div>Subject field must be filled</div>")
    }

    if(message.length > 0) {
      statusElm.append("<div>Message is valid</div>")
      statusElm.append("<div>Sent!</div>")
    } else { 
      event.preventDefault()
      statusElm.append("<div>Message field must be filled</div>") }
