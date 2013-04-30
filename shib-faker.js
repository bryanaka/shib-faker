var http			= require("http"),
		httpProxy = require("http-proxy"),
		ShibFaker = require("./configure.js");

var shib = new ShibFaker();
// create the proxy server
httpProxy.createServer( function (request, response, proxy) {
	
	for (var attribute in shib.attributes) {
		request.headers[attribute] = shib.attributes[attribute];
		console.log(request.headers[attribute]);
	}
	proxy.proxyRequest(request, response, {
		host: "localhost",
		port: 3000
	});

}).listen(8000);
console.log("Proxy is running on localhost:8000");
