var cryptopp = require('cryptopp');

exports.encrypt = function (text, hexPublicKey, curveName) {
    return cryptopp.ecies.prime.encrypt(text, {'x': hexPublicKey.substring(2, 66), 'y': hexPublicKey.substring(66)}, curveName);
};

exports.decrypt = function (cipherText, hexPrivateKey, curveName) {
    return cryptopp.ecies.prime.decrypt(cipherText, hexPrivateKey, curveName);
};