(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').show();
    PortfolioView.getStats('about');
  };

  module.aboutController = aboutController;
})(window);
