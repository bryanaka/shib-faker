Shib-Faker
===========

*ßeta* - Use at own risk
-----------------------

Fakes HTTP Headers that Shibboleth usually injects after intercepting requests

requires node and http-proxy from NPM

## Use Command-Line

	node shib-faker.js <app_host:app_port> <proxy host:proxy_port>

## Configuration

Edit your attributes in `shib-faker.js`. It is the `this.attributes` object under `ShibFaker`. To add or remove properties to fake, just simply remove or add properties to the `this.attributes` object.

## Configuration v0.0.2
This small program is in the process of being broken up into separate files. Eventually you will just edit the attributes and values you want to use in the attributes.js file and configure the options in the config.js file

### Coming Soon
* Environment Variable Support
* Inject other important shibboleth variables
* Authentication Gateway
* Authenticate against JSON to simulate actual authentication?
* Separatation of files
* Intelligent defaults
* Tests
* And many more options