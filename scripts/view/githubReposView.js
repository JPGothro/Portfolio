(function(module) {
  var githubReposView = {};

  var repoCompiler = Handlebars.compile($('#repos-template').text());

  // this will filter the set of Repos using the passed attribute.
  githubReposView.renderRepos = function() {
    $('#about ul').empty()
    .append(githubReposObj.withTheAttribute('name').map(repoCompiler));
  };

  // get the data and pass the render function as a callback.
  githubReposObj.requestRepos(githubReposView.renderRepos);

  module.githubReposView = githubReposView;
})(window);
