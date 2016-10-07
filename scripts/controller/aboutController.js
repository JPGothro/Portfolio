(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').show();
    portfolioView.getStats('about');
  };

  module.aboutController = aboutController;
})(window);
