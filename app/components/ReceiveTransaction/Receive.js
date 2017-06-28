import React, { Component } from 'react';

class Receive extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-lg-12">
            <h3>NewAddress</h3>
          </div>

          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-body">

                <div className="col-lg-12 col-md-12">

                  <div className="col-md-12">
                    <span>Address Name</span>
                    <br/>

                    <input type="text" className="form-control col-md-12" placeholder="(Optional) Name" />
                    <br/>
                    <br/>
                  </div>
                </div>



                <div className="col-lg-12 col-md-12">
                  <div className="col-md-12">


                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="address" />
                      <span className="input-group-btn">
                        <button className="btn btn-success" type="button">New Address</button>
                      </span>
                    </div>

                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Receive;
