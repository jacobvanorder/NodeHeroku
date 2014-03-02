// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	var jsonObject = {
						"status": "excellent",
						"hitCount": 0
					  }; 
  res.send(JSON.stringify(jsonObject, undefined, 2));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});