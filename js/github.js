var apiKey = require('./../.env').apiKey;
var giphy = require('./../js/giphy.js');
var moment = require('moment');

// exports.getUser = function(gitUserName){
//
// };
exports.gitUser = function() {
  var gitUserName = $('#git-user').val();
  $.get('https://api.github.com/users/' + gitUserName +'?access_token=' + apiKey).then(function(response){
    $('.show-user').append('<li class="git-user-name"><h2>' +
    response.name + '</h2></li>' +
    '<li><img src="' + response.avatar_url + '" alt="User Avatar"></li>' +
    '<li><form id="repository">'+
    '<input type="text" id="repos" value="' + response.repos_url +'">'+
    '<button class="btn-primary" id="getrepos"> Get '+ response.name +'\'s Projects</button>'+
    '</form></li>');

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.gitRepos = function() {
  var gitUserName = $('#git-user').val();
  var gifUrls = [];
  $.get('https://api.github.com/users/' + gitUserName +'/repos?access_token=' + apiKey + '&per_page=1000&sort=update').then(function(response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      gifUrls.push(giphy.getRandomGif());
      for (var j = 0; j < gifUrls.length; j++) {
        $('.show-repos').append('<ul class="repo-result"><li>' + response[i].full_name + '</li>' +
        '<li>' + response[i].description + '</li>' +
        '<li>Project Homepage:<a target="_blank" href="'+ response[i].homepage +'">' + response[i].homepage + '</a></li>' +
        '<li>Size: ' + response[i].size + '</li>' +
        '<li>Number of Forks: ' + response[i].forks_count + '</li>' +
        '<li><a target="_blank" href="'+
        response[i].html_url +'">Open project</a></li></ul>' +
        '<li><img border="0" align="left" src="'+ gifUrls[i] +'"></li>'
        );
      }
    }
    console.log(gifUrls);
    }).fail(function(error) {
    console.log("fail" + error.responseJSON.message);
    });
};
