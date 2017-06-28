import Client from 'bitcoin-core';
const client = new Client({
  port: 19119,
  // network:"testnet",

  username: 'yourusername',
  password: 'yourpassword'

});


export default class Wallet {

  constructor() {

  }

  /**
   * @param {Object} accountObject - the current account we'll use with other files
   */
  setCurrentAccount(accountObject) {
    return accountObject;
  }

  /**
   * Allow the user to get balance
   */
  balanceCurrentBalance() {
    return new Promise((resolve, reject) => {
      client.getBalance().then((balance) => {
        resolve(balance);
        return '';
      }).catch((err) => {
        reject(err);
      });
    });
  }

  pendingBalance() {
    return new Promise((resolve, reject) => {
      client.getBalance().then((balance) => {
        resolve(balance);
        return balance;
      }).catch((err) => {
        reject(err);
      });
    });
  }

  async getTransactions(account) {
    let transactions;
    if (account == null) {
      transactions = await client.listTransactions();
    } else {
      transactions = await client.listTransactions(account);
    }
    return transactions;
  }

  async listAllAccounts() {
    const addresses = await client.listReceivedByAddress(0, true);
    return addresses;
  }

  async createNewAddress(nameOpt) {
    let name = nameOpt || null;
    let newAddress;
    if(name===null){
      // Create address without name
      newAddress = await client.getNewAddress();
    }else{
      // Create the new address with the name
      newAddress = await client.getNewAddress(name);
    }
    return newAddress;
  }

  sendMoney(sendAddress) {
    console.log(sendAddress);
    return new Promise((resolve, reject) => {
      // Check for a set user
        // If there is no set user reject
      // Check to see if the address is a bitcoin address
    });
  }
}
