import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-brand ml-2">MyApp</div>
      <div style={{ flexGrow: 10 }} />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className={props.location.pathname === '/' ? 'nav-item nav-active' : 'nav-item'}
          >
            <Link to='/' className='nav-link'>ONE</Link>
          </li>
          <li
            className={props.location.pathname === '/two' ? 'nav-item nav-active' : 'nav-item'}
          >
            <Link to='/two' className='nav-link'>TWO</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);