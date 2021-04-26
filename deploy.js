const HDwalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('web3')
const {interface, bytecode} = require('./compile');

const provider = new HDwalletProvider(
  "quit zero finger dog ice sentence rely prefer pond present apple know",
  "https://rinkeby.infura.io/v3/62aee2dde6fe48988871205f2ae4cc4b"
);

const web3 = new Web3(provider);

const deploy = async () =>{
    console.log('hello')
    const accounts = await web3.eth.getAccounts();

    console.log('attempting to deploy contract on :' + accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,argument:['hi eth']}).send({from:accounts[0],gas:'1000000'})

    console.log('deployed on address:' + result.options.address);
}