gifUrl = "";

exports.getRandomGif = function() {
$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(gifReturn) {
  gifUrl = gifReturn.data.image_url;

  $(".gif-of-the-moment").append('<img src="'+ gifUrl +'" alt="random gif">');

}).fail(function(error) {
  alert("oh sheet mang no content string");
});
console.log("after the get" + gifUrl);
return gifUrl;
};
