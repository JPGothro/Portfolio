(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    $('.tab-content').hide();
    $('#projects').show();
    portfolioView.getStats('projects');
  };

  module.projectController = projectController;
})(window);
