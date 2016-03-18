var apiKey = require('./../.env').apiKey;
var moment = require('moment');

// exports.getUser = function(gitUserName){
//
// };

exports.getRepos = function(reposUrl) {
  console.log(reposUrl);
  $.get('https://api.github.com/users/' + gitUserName +'?access_token=' + apiKey).then(function(responseJSON) {
    console.log(responseJSON);
    $('show-repos').append('<li>Hey there</li>');

    alert('gotchu boy');
    }).fail(function(error) {
    console.log("fail" + error.message);
    });
};
