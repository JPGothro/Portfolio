// Create the view of the data.
// Manage Menu Navigation items for projects and about sections.
(function(module){

  var PortfolioView = {};

  PortfolioView.handleMainNav = function () {
    // Ensure the nav items function to switch between projects, wip and about.
    // Store the selected item so it can be passed as an argument to the footer
    // to generate the correct stat message.
    $('.nav-items').on('click', '.tab', function(event) {
      $('.tab-content').hide();
      event.preventDefault();
      var $selectedItem = $(this).data('content');
      $('#' + $selectedItem).show();
      PortfolioView.getStats($selectedItem);
    });

    $('.nav-items .tab:first').click();
  };

  PortfolioView.renderIndexPage = function() {
    // filter the projects array for the appropriate selected tab.
    Project.all.filter(function(project) {
      return project.prjType === 'PROJECTS';
    })
    .forEach(function(a){
      $('#projects').append(a.toHtml());
    });

    Project.all.filter(function(project) {
      return project.prjType === 'WIPS';
    })
    .forEach(function(a){
      $('#wips').append(a.toHtml());
    });

    PortfolioView.handleMainNav();
  };

  PortfolioView.getStats = function(selectedTab) {
    if (selectedTab.toLowerCase() === 'about') {
      // find the most recently completed project and display that info
      var sortedPrj = Project.all.filter(function(project) {
        return project.prjType === 'PROJECTS';
      })
      .sort(function(a, b){
        if (a.daysAgo < b.daysAgo) {
          return -1;
        } else {
          return 1;
        };
      });
      $('#stats').text(' | Last project completed: ' + sortedPrj[0].daysAgo + ' days ago.');
    } else {
      var totProjects = Project.all.length;
      var completedProjects = Project.all.reduce(function(acc, curr){
        if (curr.prjType.toLowerCase() === selectedTab) {
          acc++;
        };
        return acc;
      }, 0);
      $('#stats').text(' |  ' + completedProjects + ' projects of ' + totProjects + ' total.');
    };

  };

  // call the functions
  PortfolioView.renderIndexPage();

  module.PortfolioView = PortfolioView;
})(window);
