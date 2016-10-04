(function(module) {
  var wipController = {};

  wipController.reveal = function() {
    $('.tab-content').hide();
    $('#wips').show();
    PortfolioView.getStats('wips');
  };

  module.wipController = wipController;
})(window);
