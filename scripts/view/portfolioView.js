// Create the view of the data.
// Manage Menu Navigation items for projects and about sections.
(function(module){

  var portfolioView = {};

  portfolioView.renderIndexPage = function() {
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

  };

  portfolioView.getStats = function(selectedTab) {
    if (selectedTab.toLowerCase() === 'about') {
      // find the most recently completed project and display that info
      var mostRecentPrj = Project.all.filter(function(project) {
        return project.prjType === 'PROJECTS';
      })
      .reduce(function(acc, curr) {
        if (acc > curr.daysAgo) acc = curr.daysAgo;
        return acc;
      }, Infinity);

      $('#stats').text(' | Last project completed: ' + mostRecentPrj + ' days ago.');
    } else {
      var totProjects = Project.all.length;
      var shownProjects = Project.all.reduce(function(acc, curr){
        if (curr.prjType.toLowerCase() === selectedTab) {
          acc++;
        };
        return acc;
      }, 0);
      $('#stats').text(' |  ' + shownProjects + ' projects of ' + totProjects + ' total.');
    };

  };

  // call the functions
  Project.fetchAll(portfolioView.renderIndexPage);

  module.portfolioView = portfolioView;
})(window);
