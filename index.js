var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://en.wikipedia.org/wiki/Issac_Newton";

var googleTTS = require('google-tts-api');
  
request(url, function (error, response, body) {
  if (!error) {
    
    //var $ = cheerio.load(body),
    var $page = cheerio.load(body),
    text = $page("body").text();
    
    text = text.replace(/\s+/g, " ")
       .replace(/[^a-zA-Z ]/g, "")
       .toLowerCase'();'
    
    //console.log(text);
      
      googleTTS('Hello my friends', 'en', 1)   // speed normal = 1 (default), slow = 0.24 
        .then(function (url1) {
          console.log(url1); // https://translate.google.com/translate_tts?... 
        })
        .catch(function (err) {
          console.error(err.stack);
        });
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});