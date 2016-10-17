// Let's build a server!
var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

function proxyGitHub(request, response) {
  console.log('proxyGitHub handling call');
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: {
      Authorization: 'token ' + process.env.ACCESS_TOKEN_GITHUB
    }
  }))(request, response);
};

// function proxyGitHub(request, response) {
//   console.log('proxyGitHub v2 handling call');
//   (requestProxy({
//     url: 'https://api.github.com/' + request.params[0],
//     data: 'access_token=' + process.env.ACCESS_TOKEN_GITHUB
//   }))(request, response);
// };

app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
