//var ed2curve = require('ed2curve');
//var nacl_factory = require("js-nacl");
//var nacl = nacl_factory.instantiate();

function convertPublicKey(publicKey) {
	//return ed2curve.convertPublicKey(publicKey)
}

function convertPrivateKey(privateKey) {
	//return ed2curve.convertSecretKey(privateKey);
}

function encrypt(message, nonce, senderPrivateKey, recipientPublicKey) {
	//return nacl.crypto_box(message, nonce, convertPublicKey(recipientPublicKey), convertPrivateKey(senderPrivateKey));
}

function decrypt(message, nonce, senderPublicKey, recipientPrivateKey) {
	//return nacl.crypto_box_open(message, nonce, convertPublicKey(senderPublicKey), convertPrivateKey(recipientPrivateKey));
}

function getNonce() {
	//return nacl.crypto_box_random_nonce();;
}

module.exports = {
	convertPublicKey: convertPublicKey,
	convertPrivateKey: convertPrivateKey,
	getNonce: getNonce,
	encrypt: encrypt,
	decrypt: decrypt
}