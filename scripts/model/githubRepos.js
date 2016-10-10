(function(module) {
  var githubReposObj = {};

  githubReposObj.allRepos = [];

  githubReposObj.requestRepos = function(callback) {
    // Use an AJAX call to get the REPO data
    var request = $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      data: 'access_token=' + githubAccessToken
    })
    .done(function(returnedData) {
      returnedData.forEach(function(item) {
        // Store the Repo data from JSON
        githubReposObj.allRepos.push(item);
      });
      callback();
    })
    .fail(function(jqxhr, status) {
      console.log('ajax call failed: ', status);
      alert('ajax call failed: ' + status);
    });
  };

  githubReposObj.withTheAttribute = function(passedAttr) {
    return githubReposObj.allRepos.filter(function(aRepo) {
      return aRepo[passedAttr];
    });
  };

  module.githubReposObj = githubReposObj;
})(window);
