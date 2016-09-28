
// Load and generate HTML for the portfolio items
(function(module) {

  Project.all = [];

  function Project (dataIn) {
    // constructor function for a Project object
    for (var key in dataIn) {
      this[key] = dataIn[key];
    };
  };

  // Functions to render the HTML using the appropriate template
  Project.prototype.toHtml = function() {
    // use Handlebar templating to create project data for HTML.
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    var html = template(this);

    return html;
  };

  // loadAll will take ALL the parsed JSON data and put it in the project arrays for processing.
  Project.loadAll = function(dataWePassIn) {
    dataWePassIn.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };

  // This function below will retrieve ALL the data from either a local or remote
  // source, process it, then hand off control to the View...

  Project.fetchAll = function() {
    if (localStorage.portfolioData) {
        // When our data is already in localStorage:
        // 1. We can process it,
        // 2. Then we can render the index page.
      var storedData = JSON.parse(localStorage.getItem('portfolioData'));
      Project.loadAll(storedData);
    } else {
        //  1. Load our json data,
        //  2. Store that data in localStorage so we can skip the server call next time.
        //  3. And then render the index page. */
      $.ajax('/data/portfolioData.json', {
        method: 'GET',
        success: successHandler,
        error: errorHandler
      });
    }
  };

  function successHandler(data) {
    localStorage.setItem('portfolioData', JSON.stringify(data));
    Project.loadAll(data);
    PortfolioView.renderIndexPage();
  };

  function errorHandler(error) {
    console.log('ERROR', error);
  };

  Project.fetchAll();

  module.Project = Project;
})(window);
