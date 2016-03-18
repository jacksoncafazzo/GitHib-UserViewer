var gitHub = require('./../js/github.js');
//var map = require('./../map.js');

$(document).ready(function() {

  $('#show-me').click(function(event) {
    event.preventDefault();
    console.log("iee-ok buddy here's the repo object in yer console here ya go:");
    gitHub.getRepos();

  });
});
