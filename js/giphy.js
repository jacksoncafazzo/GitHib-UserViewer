gifUrl = "";
gifCount = 0;

exports.getRandomGif = function() {
$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(gifReturn) {
  gifUrl = gifReturn.data.image_url;
  $(".gif-of-the-moment").append('<img src="'+ gifUrl +'" alt="random gif">');

}).fail(function(error) {
  alert("oh sheet mang no return");
});
console.log("after the get" + gifUrl);
return gifUrl;
};

exports.getRandomSmallGif = function() {

$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(gifReturn) {
  gifUrl = gifReturn.data.fixed_height_small_url;
  $("repo-gif").append('<li><img src="'+ gifUrl +'" alt="random gif"></li>');
}).fail(function(error) {
  console.log(error);
});
console.log("after the get" + gifUrl);
gifCount =+ 1;
return gifUrl;
};
