var http = require("http");
var { logHandler } = require("./logHandler");
var server = http.createServer(function (req, res) {
    /* 
        logHandler function will get request as a parameter
        and log the data the request contains
    */
  logHandler(req);
    /**
     * request urls are processed below and
     * corresponding responses are sent
     */
  if (req.url == "/") {
    res.writeHead(200);
    res.write("Home Page");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200);
    res.write("About");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200);
    res.write("Contact");
    res.end();
  } else {
    res.writeHead(404);
    res.end("Invalid Request!");
  }
});

server.listen(5000);
