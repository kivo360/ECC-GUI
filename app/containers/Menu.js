import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"></a>
              </div>
              <ul className="nav navbar-nav">

                <li>

                  <Link to="/">
                    <a href="#">
                      Overview
                    </a>
                   </Link>

                </li>

                <li className="active">
                  <Link to="/send">
                    <a href="#">
                      Send
                      <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>


                <li>

                  <Link to="/receive">
                    <a href="#">
                      Recieve
                    </a>
                   </Link>

                </li>

                <li>

                  <Link to="/transaction">
                    <a href="#">
                      Transactions
                    </a>
                   </Link>

                </li>

                <li>

                  <Link to="/about">
                    <a href="#">
                      About
                    </a>
                   </Link>

                </li>

              </ul>
            </div>
          </nav>

        </div>
    );
  }
}

export default Menu;
