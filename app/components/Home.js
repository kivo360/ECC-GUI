// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Wallet  from '../utils/wallet';
const wallet = new Wallet();
require('./Home.css');

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentECC: 10,
      pendingECC: 25
    };

    // const wall = new Wallet();


    wallet.balanceCurrentBalance().then((data) =>{
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

    this.totalECC = this.totalECC.bind(this);
  }

  totalECC() {
    return this.state.currentECC + this.state.pendingECC;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xs-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3>Balance</h3>
                <hr />
                <div className="col-lg-4 col-xs-4 col-md-4">
                  <span>Current:</span>
                </div>
                <div className="col-lg-8 col-md-8 col-xs-8  text-right">
                  {this.state.currentECC} ECC
                </div>

                <div className="col-lg-4 col-xs-4 col-md-4">
                  <span>Pending:</span>
                </div>
                <div className="col-lg-8 col-md-8 col-xs-8 text-right">
                  {this.state.pendingECC} ECC
                </div>
                <br/>
                <br/>
                <hr />
                <div className="col-lg-4 col-xs-4 col-md-4">
                  <span>Total:</span>
                </div>
                <div className="col-lg-8 col-md-8 col-xs-8 text-right">
                  {this.totalECC()} ECC
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-6 col-xs-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3>Current Value</h3>
                <hr />
                <div className="col-lg-3 col-lg-3">
                  <span>CoinExchange.io:</span>
                </div>
                <div className="col-lg-9 col-lg-9">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 ">
            <div className="panel panel-default transaction-container">
              <div className="panel-body">
                <h3>Recent Transactions</h3>
                <hr />
                <hr />
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
