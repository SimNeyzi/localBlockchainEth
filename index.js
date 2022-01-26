const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');

web3.eth.getAccounts().then(accounts => console.log(accounts));

const sendingAddress = '0xc8b7904bdc9c2de62C247b74BC91a3712941c707';
const receivingAddress = '0x49c45507Af75236cECBa5748F300AD0A3e5c1B98';

web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

const rawTransaction = {
  nonce: 0,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 100,
  data: ""
}

const privateKeySender = '112bb664fc39a4a6b8d182ed0a2c268f90e7aea36ecb8dcd5a5039c1ea5df34b';
const privateKeyHex = new Buffer(privateKeySender, 'hex');
const transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeyHex);

const serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);