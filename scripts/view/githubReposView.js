(function(module) {
  var githubReposView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());

  githubReposView.renderRepos = function() {
    $('#about ul').empty()
    .append(githubReposObj.withTheAttribute('name').map(repoCompiler));
  };

  // get the data and pass the render function as a callback.
  githubReposObj.requestRepos(githubReposView.renderRepos);

  module.githubReposView = githubReposView;
})(window);
