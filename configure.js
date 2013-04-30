var ShibFaker = function(){
	// handle CLI input
	var pattern = /:/gm,
		appInfo = process.argv[2].split(pattern),
		proxyInfo = process.argv[3].split(pattern);

	this.options = {
		variable_type: "headers",
		app_host:	appInfo[0],
		app_port:	appInfo[1],
		proxy_host: proxyInfo[0],
		proxy_port: proxyInfo[1]
	};

	this.attributes = {
		"EPPN": "bmrobles@lbl.gov",
		"CN":	"Bryan Robles",
		"MAIL": "bmrobles@lbl.gov"
	};
};
exports.ShibFaker = ShibFaker;
