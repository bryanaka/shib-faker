var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
httpProxy.createServer(function (req, res, proxy) {
  
  req.headers.HTTP_EPPN = "bmrobles";
  req.headers.HTTP_CN = "bmrobles";
  req.headers.HTTP_MAIL = "bmrobles@gmail.com";

  proxy.proxyRequest(req, res, {
    host: 'localhost',
    port: 9000
  });
}).listen(8000);
console.log("Proxy Server is now running");

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied: ' + req.url +'\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
console.log("Normal Server is now running");