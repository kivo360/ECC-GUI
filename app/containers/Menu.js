import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './Menu.css';

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
                    <a href="#" className={style.whiteNav}>
                      Overview
                    </a>
                   </Link>

                </li>

                <li className="active">
                  <Link to="/send">
                    <a href="#" className={style.whiteNav}>
                      Send
                      <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>


                <li>

                  <Link to="/receive">
                    <a href="#" className={style.whiteNav}>
                      Recieve
                    </a>
                   </Link>

                </li>

                <li>

                  <Link to="/transaction">
                    <a href="#" className={style.whiteNav}>
                      Transactions
                    </a>
                   </Link>

                </li>

                <li>

                  <Link to="/about">
                    <a href="#" className={style.whiteNav}>
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
