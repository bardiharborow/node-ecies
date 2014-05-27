node-ecies
==========

[![Build Status](https://travis-ci.org/bardiharborow/node-ecies.svg?branch=master)](https://travis-ci.org/bardiharborow/node-ecies) [![NPM](http://img.shields.io/npm/v/ecies.svg)](https://www.npmjs.org/package/ecies) [![Dependency Status](https://david-dm.org/bardiharborow/node-ecies.png)](https://david-dm.org/bardiharborow/node-ecies) [![MIT Licence](http://img.shields.io/badge/license-MIT-red.svg)](http://opensource.org/licenses/MIT) [![GitTip](http://img.shields.io/gittip/BardiHarborow.svg)](https://www.gittip.com/BardiHarborow/)

A Node.js ECIES implementation.

###Usage
```javascript
var ecies = require('ecies');
var chiperText = ecies.encrypt(text, hexPublicKey, curveName);
var decryptedText = ecies.decrypt(cipherText, hexPrivateKey, curveName);
```

###Compatability
I've read somewhere that Crypto++'s ECIES implementation is not compatible with Bouncy Castle's implementation. It is also broken in Node 0.11.