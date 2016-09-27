
// Manage Menu Navigation items for projects and about sections.

var PortfolioView = {};

PortfolioView.handleMainNav = function () {
  // ensure the nav items function to switch between projects and about

  $('.nav-items').on('click', '.tab', function(event) {
    $('.tab-content').hide();
    event.preventDefault();
    var $selectedItem = $(this).data('content');
    $('#' + $selectedItem).show();
  });

  $('.nav-items .tab:first').click();
};

PortfolioView.renderIndexPage = function() {

  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml());
  });

  ProjectWip.all.forEach(function(a){
    $('#wips').append(a.toHtml());
  });

  PortfolioView.handleMainNav();
};


// call the functions
PortfolioView.renderIndexPage();
