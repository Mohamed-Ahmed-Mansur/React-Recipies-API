import React from 'react';
import style from '../Styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div id="navBar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="d-flex gap-2 align-items-center">
              <img
                src={'images/chef.svg'}
                alt="logo"
                style={{ color: '#1c1c1c', width: '70px' }}
                className={style.chefLogo}
              />
              <span className={style.tastyBite}>
                <span> Tasty</span>{' '}
                <span style={{ color: '#198754' }}>Bite</span>
              </span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: 'none' }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`${style.navList} navbar-nav m-auto`}>
              <li className="nav-item px-1">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link" href="/">
                  Recipes
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link" href="/">
                  Add recipe
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="signUp d-none d-lg-block d-xl-block d-xxl-block">
            <button className="btn btn-light shadow-sm me-3 px-4">
              Log in
            </button>
            <button className="btn btn-success shadow-sm px-4">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
