//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};

$("document").ready(function () {
  app.init();

  //animation case studies grid

  $('.box').on('mouseenter', function(e){
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x});
  })

  $('.box').on('mouseout', function(e){
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x});
  })

  $('.post-photo').on('mouseenter', function(e){
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x});
  })

  $('.post-photo').on('mouseout', function(e){
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y, left:x});
  })
});


