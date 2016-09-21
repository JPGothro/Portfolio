'use strict';

var projects = [];

function Project (dataIn) {
  // constructor function for a Project object
  this.projectTitle   = dataIn.projectTitle;
  this.projectSummary = dataIn.projectSummary;
  this.projectDetails = dataIn.projectDetails;
  this.projectLink    = dataIn.projectLink;
  this.projectSrcLink = dataIn.projectSrcLink;
};

Project.prototype.toHtml = function() {
  // generate the HTML for the Project object to insert into the DOM (in an article tag).
  var $newArticle = $('article.project-template').clone();
  $newArticle.find('summary').text(this.projectSummary);
  $newArticle.find('p.project-details').text(this.projectDetails);
  var linkItem = this.projectLink;
  if (linkItem !== null) {
    $newArticle.find('a.project-link').attr('href', this.projectLink).attr('target', '_blank');
  };
  linkItem = this.projectSrcLink;
  if (linkItem !== null) {
    $newArticle.find('a.project-source').attr('href', this.projectSrcLink).attr('target', '_blank');
  };

  $newArticle.removeClass('project-template');

  return $newArticle;
};

localData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
