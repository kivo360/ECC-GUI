import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class AddressBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      friendList: [
        { label: 'name1', address: 'ECCAdress1' },
        { label: 'name2', address: 'ECCAdress2' }
      ],
      isAdding: false,
      buttonSign: 'Add Address'
    };


    console.log(this.state);
    this._handleInput = this._handleInput.bind(this);
    this._handleToggleAddAddress = this._handleToggleAddAddress.bind(this);
  }

  _handleInput(event) {
    let target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  _handleToggleAddAddress() {
    if (this.state.isAdding === false){
      this.setState({ isAdding: true, buttonSign: 'Complete Add' });
    } else {
      let friendArray = this.state.friendList;
      // Need to validate first. Very possible to use async
      friendArray.push({ label: this.state.label, address: this.state.address });
      this.setState({ isAdding: false, buttonSign: 'Add Address', friendList: friendArray });
    }
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-success btn-raised" type="button" onClick={this._handleToggleAddAddress}> {this.state.buttonSign} </button>
          </span>
          {this.state.isAdding &&
            <div>
              <input className="form-control" onChange={this._handleInput} name='label' placeholder="Label" type="text"/>
              <input className="form-control" onChange={this._handleInput} name='address' placeholder="ECC Address" type="text"/>
            </div>

          }

        </div>

        <BootstrapTable data={this.state.friendList}  height='400' striped hover>
          <TableHeaderColumn width='50%' isKey dataField='label'>Label</TableHeaderColumn>
          <TableHeaderColumn width='50%' dataField='address'>Address</TableHeaderColumn>

        </BootstrapTable>
      </div>
    );
  }
}

export default AddressBook;
