var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://en.wikipedia.org/wiki/Issac_Newton";
  
request(url, function (error, response, body) {
  if (!error) {
    
    //var $ = cheerio.load(body),
    var $page = cheerio.load(body),
    text = $page("body").text();
    
    text = text.replace(/\s+/g, " ")
       .replace(/[^a-zA-Z ]/g, "")
       .toLowerCase();
    
    console.log(text);
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});