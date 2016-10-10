// Process the data...
// Load and generate HTML for the portfolio items
(function(module) {

  function Project (dataIn) {
    // constructor function for a Project object
    for (var key in dataIn) {
      this[key] = dataIn[key];
    };
  };

  Project.all = [];

  // Functions to render the HTML using the appropriate template
  Project.prototype.toHtml = function() {
    // use Handlebar templating to create project data for HTML.
    var template = Handlebars.compile($('#project-template').html());
    this.prjDetails = marked(this.prjDetails);
    // generating a date; will need to separate displaying it and using it for a calc.
    var tempDate = new Date(this.prjCompletionDt);
    this.prjCompletedOn = moment(tempDate).format('MMM Do YYYY');
    this.daysAgo = parseInt((new Date() - tempDate)/60/60/24/1000);
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

  Project.fetchAll = function(next) {
    if (localStorage.portfolioData) {
        // When our data is already in localStorage:
        // 1. We can process it,
        // 2. Then we can render the index page.
      var storedData = JSON.parse(localStorage.getItem('portfolioData'));
      Project.loadAll(storedData);
      next();
    } else {
        //  1. Load our json data,
        //  2. Store that data in localStorage so we can skip the server call next time.
        //  3. And then render the index page. */
      $.ajax('/data/portfolioData.json', {
        method: 'GET'
      })
      .done(function (data) {
        localStorage.setItem('portfolioData', JSON.stringify(data));
        Project.loadAll(data);
        portfolioView.renderIndexPage();
      })
      .fail(function (error) {
        console.log('ERROR: ', error);
      });
    }
  };

  module.Project = Project;
})(window);
