'use strict';

var projects = [];

function Project (dataIn) {
  // constructor function for a Project object
  this.prjTitle   = dataIn.projectTitle;
  this.prjSummary = dataIn.projectSummary;
  this.prjDetails = dataIn.projectDetails;
  this.prjLink    = dataIn.projectLink;
  this.prjSrcLink = dataIn.projectSrcLink;
};

Project.prototype.toHtml = function() {
  // generate the HTML for the Project object to insert into the DOM (in an article tag).
  var $newArticle = $('article.project-template').clone();
  $newArticle.find('summary').text(this.prjTitle + ': ' + this.prjSummary);
  $newArticle.find('p.project-details').html(this.prjDetails);

  if (this.prjLink)
    $newArticle.find('a.project-link').attr('href', this.prjLink).attr('target', '_blank');

  if (this.prjSrcLink)
    $newArticle.find('a.project-source').attr('href', this.prjSrcLink).attr('target', '_blank');

  $newArticle.removeClass('project-template');

  return $newArticle;
};

localData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
