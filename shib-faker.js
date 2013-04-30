var http			= require("http"),
		httpProxy = require("http-proxy"),
		ShibFaker = require("./configure.js");

// Eventually, this will be abstracted into separate files

var ShibFaker = function(){
	// handle CLI input
	var pattern = /:/gm,
		appInfo = process.argv[2].split(pattern),
		proxyInfo = process.argv[3].split(pattern);

	this.options = {
		variable_type: "headers",
		app_host:	appInfo[0],
		app_port:	appInfo[1],
		app_full: process.argv[2],
		proxy_host: proxyInfo[0],
		proxy_port: proxyInfo[1],
		proxy_full: process.argv[3]
	};

	this.attributes = {
		"EPPN": "bmrobles@lbl.gov",
		"CN":	"Bryan Robles",
		"MAIL": "bmrobles@lbl.gov"
	};
};


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
console.log("ShibFaker is running on " + shib.options.proxy_full + " and proxying to/from " + shib.options.app_full);
