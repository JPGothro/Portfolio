'use strict';

var projects = [];

function Project (dataIn) {
  // constructor function for a Project object
  for (var key in dataIn) {
    this[key] = dataIn[key];
  };
};

Project.prototype.toHtml = function() {
  // use Handlebar templating to create project data for HTML.
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);

  return html;
};

myProjectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
