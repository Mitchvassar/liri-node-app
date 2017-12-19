var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var Request = require('request');
var keys = require('./keys.js');
var client = new Twitter(keys.twitterKeys);
var spotify = new Spotify(keys.spotifyKeys);
var arg2 = process.argv[2];
var arg3 = process.argv[3];

client.get('statuses/user_timeline', function (error, tweets, response) {
  if (error) {
    console.log(error);
  }
  else if (process.argv[2] === "my-tweets") {
    for (var i = 0; i < tweets.length; i++) {
      console.log('\n > ' + tweets[i].created_at + ': ' + tweets[i].text);
      //console.log(JSON.stringify(tweets[i].text));  // The favorites. 
      //console.log(JSON.stringify(response));  // Raw response object. 
    }
  }
});

//var defaultSearch = {
//	type: 'track',
//	query: 'Ace of Base The Sign',
//}

spotify.search({ type: 'track', query: arg3, }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  else if (arg2 === "spotify-this-song"){
    //for (var i = 0; i < data.length; i++) {
      console.log(data);
  }
  }
);