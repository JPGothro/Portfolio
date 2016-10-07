(function(module) {
  var centralController = {};

  centralController.reveal = function(tabName) {
    $('.tab-content').hide();
    $('#' + tabName).show();
    portfolioView.getStats(tabName);
  };

  module.centralController = centralController;
})(window);
