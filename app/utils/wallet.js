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

  listAllAccounts() {
    return new Promise((resolve, reject) => {
      client.listReceivedByAddress(0, true).then((data) => {
        resolve(data);
        return data;
      }).catch((err) => {
        reject(err);
      });
    });
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
