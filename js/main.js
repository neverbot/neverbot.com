
;(function(){

  var photoCollection = [ '001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg',
                          '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg',
                          '011.jpg' ];
  var currentPhotoPhase = 0;

  var textMessages = [ 'Master Chief Officer',
                       'Imaginaut',
                       'Mad Scientist',
                       'Software Artisan',
                       'I\'m (often) awesome',
                       'Game Designer', ];
  var currentMessage = '';
  var currentMessageAction = 0; // 0 removing characters, 1 adding characters

  var init = function() {

    currentPhotoPhase = 2;

    var random = Math.floor(Math.random() * photoCollection.length);
    $('.photo img').attr('src', 'images/photos/' + photoCollection[ random ]);

    random = Math.floor(Math.random() * textMessages.length);
    $('#text-animated').html(textMessages[ random ]);
    currentMessage = textMessages[ random ];

    window.setTimeout(changePhoto, 4000);
    window.setTimeout(typer, 3000);
  };

  var typer = function() {
    var showing = $('#text-animated').html();

    // removing characters
    if (currentMessageAction === 0)
    {
      if (showing.length <= 0)
      {
        random = Math.floor(Math.random()*textMessages.length);
        currentMessage = textMessages[ random ];
        currentMessageAction = 1;
        setTimeout(typer, 1000);
      }
      else
      {
        showing = showing.substring(0, showing.length - 1);
        $('#text-animated').html( showing );
        setTimeout(typer, 50 + Math.floor(Math.random() * 150));
      }
    }
    // adding characters
    else
    {
      if (showing.length < currentMessage.length)
      {
        showing = currentMessage.substring(0, showing.length + 1);
        $('#text-animated').html( showing );
        setTimeout(typer, 50 + Math.floor(Math.random() * 150));
      }
      else
      {
        currentMessageAction = 0;
        setTimeout(typer, 3000);
      }
    }
  };

  var changePhoto = function() {

    var elem = $('.photo');
    var delay = 0;

    switch(currentPhotoPhase) {
      // fade out
      case 0:
        delay = 1000;
        elem.fadeOut();
        break;
      // change img src
      case 1:
        elem.children('img').attr('src', 'images/photos/' + photoCollection[Math.floor(Math.random()*photoCollection.length)]);
        delay = 1000;
        break;
      // fade in
      case 2:
        delay = 2000;
        elem.fadeIn();
        break;
      // wait a little bit
      case 3:
        delay = 12000;
        break;
    }

    currentPhotoPhase = (currentPhotoPhase + 1) % 4;
    window.setTimeout(changePhoto, delay);
  };

  $(window).on('load', function() {

    init();

    $('.icon').on('click', function(event) {
      // ignore current panel
      if ($(this).hasClass('active') === true)
        return;

      var origin = $(this);

      // select the panel with the same data-key
      var panel = $('.panel').filter(function() {
        return $(this).data('key') == origin.data('key');
      });

      // if there is a destination panel
      if (panel.length > 0)
      {
        event.preventDefault();

        // hide every panel
        $('.panel').fadeOut(250);

        // show the panel with the same data-key
        panel.fadeIn(250);

        $('.icon.active').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

})();
