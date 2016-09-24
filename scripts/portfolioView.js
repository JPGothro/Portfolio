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

// call the functions
portfolioView.handleMainNav();
