//var gitUser = require('./../js/github.js').getUser;
//var gitRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

//var map = require('./../map.js');

$(document).ready(function() {

  $('#repo-search').submit(function() {
    event.preventDefault();
    var gitUser = {};
    var gitUserName = $('#git-user').val();
    $.get('https://api.github.com/users/' + gitUserName +'?access_token=' + apiKey).then(function(response){
      console.log("iee-ok buddy here's the repo object in yer console here ya go:");
      console.log(response);
      $('.show-user').append('<li class="git-user-name"><h2>' +
      response.name + '</h4></li>' +
      '<li class="avatar"><img src="' + response.avatar_url + '" alt="User Avatar"></li>' +
      '<li><form id="repository">'+
      '<input type=hidden id="repos" value="' + response.repos_url +'">'+
      '<div class="get-repos"> Get '+ response.name +'\'s Projects</div></li>'+
      '</form>');
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
//    getRepos(gitUserName);
  });


});
