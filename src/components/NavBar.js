import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import {connect} from 'react-redux'

import "./NavBar.scss";

function NavBar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar2">
        <div className="nav-container">
          <NavLink exact to="/cart" className='nav-cart'>
            <Badge variant="danger">{props.state.length}</Badge>
            <img width="30" height="24" src="/sabad.jpg" alt="sabad" />
          </NavLink>
          <NavLink exact to="/" className="nav-logo">
            <input type="text" />
            <button>جستجو</button>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/#contact"
                className="nav-links"
                onClick={handleClick}
              >
                ارتباط با ما
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                درباره ما
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/#products"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                محصولات
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                خانه
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(NavBar);
