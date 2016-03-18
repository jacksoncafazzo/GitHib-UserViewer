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
      gifUrls.push(giphy.getRandomSmallGif());
      $('.show-repos').append('<li><h2>' + response[i].full_name + '</h2></li>' +
      '<li><h3>' + response[i].description + '</h3></li>' +
      '<li><h4>Project Name: <a target="_blank" href="'+ response[i].html_url +'">' + response[i].full_name + '</a></h4></li>' +
      '<li>Size: ' + response[i].size + '</li>' +
      '<li>Language: ' + response[i].language + '</li>' +

      '<li>Number of Forks: ' + response[i].forks_count + '</li>' +
      '<li><a target="_blank" href="'+
      response[i].html_url +'">Open project</a></li>'
    );
    }

    console.log(gifUrls);
    }).fail(function(error) {
    console.log("fail" + error.responseJSON.message);
    });
};
