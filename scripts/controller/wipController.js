(function(module) {
  var wipController = {};

  wipController.reveal = function() {
    $('.tab-content').hide();
    $('#wips').show();
    portfolioView.getStats('wips');
  };

  module.wipController = wipController;
})(window);
