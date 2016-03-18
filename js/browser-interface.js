var gitHub = require('./../js/github.js');
var apiKey = require('./../.env').apiKey;
var giphy = require('./../js/giphy.js');


//var map = require('./../map.js');

$(document).ready(function() {
  var gifUrl = giphy.getRandomGif();
  console.log(gifUrl);
  $(".show-user").hide();
  $(".gif-of-the-moment").hide();
  
  $(".gif-of-the-moment").fadeIn();

  $('form#user-search').submit(function(event) {
    $('.show-user').fadeIn();
    event.preventDefault();
    gitHub.gitUser();
    gitHub.gitRepos();
  });

  $('#getrepos').click(function(event) {
    event.preventDefault();
    var gitUserName = $('#git-user').val();
    $.get('https://api.github.com/users/' + gitUserName +'/repos?access_token=' + apiKey).then(function(response) {
      console.log(response);
      // $('show-repos').append('<li>Hey there</li>'+
      // JSON.stringify(response.login));
      }).fail(function(error) {
      console.log("fail" + error.message);
      });
  });


});
