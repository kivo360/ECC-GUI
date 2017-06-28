import React, { Component } from 'react';
import AddressBook from './AddressBook';
class Send extends Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <AddressBook />
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              Address Goes Here
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Send;
