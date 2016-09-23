'use strict';

// Try adding comments so this is a little easier to follow later on as your codebase grows.

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

// TODO Given the conversation we had, you can
// remove this function. As you are now using
// CSS to style the details.


// portfolioView.handleProjectDetails = function() {
//   //TODO: I haven't figured this part out all the way yet
//   //      I have the border, but it is acting janky.
//   // for styling the details/summary info
//   $('article details').on('click', function() {
//     console.log(event.target);
//     $(this).each(function() {
//       console.log('inside each()', $(this), this);
//       if ($(this).prop('open')) {
//         console.log('inside prop open', $(this), this);
//         $(this).css('border', '2px solid #33aa88');
//       } else {
//         console.log('inside else', $(this), this);
//         $(this).css('border', '0px');
//       }
//     });
//   });
// };


// call the functions
portfolioView.handleMainNav();

// Also, get rid of this as you don't need it
portfolioView.handleProjectDetails();
