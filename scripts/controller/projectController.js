(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    $('.tab-content').hide();
    $('#projects').show();
    PortfolioView.getStats('projects');
  };

  module.projectController = projectController;
})(window);
