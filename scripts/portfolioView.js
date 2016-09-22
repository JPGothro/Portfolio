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
  //TODO: I haven't figured this part out yet, and may have to revise the html if I can't...
  //      I'm just trying to have a border on the element when it is displaying the details.
  // for styling the details/summary info
  // $('article details').on('change', function() {
  //   console.log('on change event');
  //   if ($(this).is('open')) {
  //     $(this).css('border', '1px solid green');
  //   } else {
  //     $(this).css('border','');
  //   }
  // });
};


// call the functions
portfolioView.handleMainNav();
