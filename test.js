var ecies = require('./main');

exports.testsMain = function(beforeExit, assert) {
    var text = 'Secret ECIES Test Message!';
    /* sha256('correct horse battery staple') */
    var publicKey = '0478d430274f8c5ec1321338151e9f27f4c676a008bdf8638d07c0b6be9ab35c71a1518063243acd4dfe96b66e3f2ec8013c8e072cd09b3834a19f81f659cc3455';
    var privateKey = 'c4bbcb1fbec99d65bf59d85c8cb62ee2db963f0fe106f483d9afa73bd4e39a8a';
    //var privateKey = bitcoin.ECKey('5KJvsngHeMpm884wtkJNzQGaCErckhHJBGFsvd3VyK5qMZXj3hS').toHex();
    var cipherText = ecies.encrypt(text, publicKey, 'secp256k1');
    var decryptedText = ecies.decrypt(cipherText, privateKey, 'secp256k1'); 
    assert.equal(text, decryptedText);
};