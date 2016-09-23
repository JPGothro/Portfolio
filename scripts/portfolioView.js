'use strict';

var portfolioView = {};

portfolioView.handleMainNav = function () {

  $('.nav-items').on('click', '.tab', function(event) {
    $('.tab-content').hide();
    event.preventDefault();
    var $selectedItem = $(this).data('content');
    $('#' + $selectedItem).show();
  });

  $('.nav-items .tab:first').click();
};

portfolioView.handleProjectDetails = function() {
  //TODO: I haven't figured this part out all the way yet
  //      I have the border, but it is acting janky.
  // for styling the details/summary info
  $('article details').on('click', function() {
    $(this).each(function() {
      //console.log($(this));
      if ($(this).attr('open')) {
        $(this).css('border', '');
      } else {
        $(this).css('border','2px solid #33aa88');
      }
    });
  });
};


// call the functions
portfolioView.handleMainNav();
portfolioView.handleProjectDetails();
