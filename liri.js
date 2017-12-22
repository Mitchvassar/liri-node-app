var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');
var keys = require('./keys.js');
var fs = require("fs");
var client = new Twitter(keys.twitterKeys);
var spotify = new Spotify(keys.spotifyKeys);
var arg2 = process.argv[2];
var arg3 = process.argv[3];

if (process.argv[2] === "my-tweets")
client.get('statuses/user_timeline', function (error, tweets, response) {
  if (error) {
    console.log(error);
  } else  {
    for (var i = 0; i < tweets.length; i++) {
      console.log('\n > ' + tweets[i].created_at + ': ' + tweets[i].text);
    }
  }
});

//var defaultSearch = {
//	type: 'track',
//	query: 'Ace of Base The Sign',
//}

//Keeps returning 401:no token errors, can't find what I've done wrong.

if (arg2 === "spotify-this-song") {
spotify.search({
  type: 'track',
  query: arg3,
}, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  } else  {
    console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name);
    console.log("The song's name: " + data.tracks.items[0].name);
    console.log("Song preview: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
  }
});
}

if (arg2 === "movie-this") {

  var movieName = null;

  if (process.argv[3]) {
    movieName = process.argv[3];

  } else {
    movieName = "Mr Nobody";
  }

  request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function (error, response, body) {


    if (!error && response.statusCode === 200) {

      console.log("This movie's title is: " + JSON.parse(body).Title);
      console.log("The movie's release date is: " + JSON.parse(body).Released);
      console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
      console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
      console.log("The movie's country is: " + JSON.parse(body).Country);
      console.log("The movie's language is: " + JSON.parse(body).Language);
      console.log("The movie's plot is: " + JSON.parse(body).Plot);
      console.log("The movie's actor list is: " + JSON.parse(body).Actors);


    }

  });
}
if (arg2 === "do-what-it-says") {

  fs.readFile("random.txt", "utf8", function(err, data) {
   
   var returned = data.split(",");

   function vroom(arg2){
   if (output[2] === "spotify-this-song"){
       
   }
}
   for (var i = 0; i < returned.length; i++) {


 console.log(returned[i]);
      }
  });  
};