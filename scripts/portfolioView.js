
// Manage Menu Navigation items for projects and about sections.
(function(module){

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

    Project.all.filter(function(project) {
      return project.prjType === 'PROJECT';
    })
    .forEach(function(a){
      $('#projects').append(a.toHtml());
    });

    Project.all.filter(function(project) {
      return project.prjType === 'WIP';
    })
    .forEach(function(a){
      $('#wips').append(a.toHtmlWip());
    });

    PortfolioView.handleMainNav();
  };


  // call the functions
  PortfolioView.renderIndexPage();

  module.PortfolioView = PortfolioView;
})(window);
