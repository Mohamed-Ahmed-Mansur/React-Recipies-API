import React from 'react';
import style from '../Styles/Landing.module.css';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div id={style.landing}>
      <div className="container-fluid my-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1
              className="fw-bold text-start"
              style={{ fontFamily: 'Poppins,sans-serif' }}
            >
              Daily Bites, Endless Delights: <br />
              Join Our
              <span className="text-success"> Food</span> Journey
            </h1>
            <p className="my-4 fw-normal " style={{ maxWidth: '590px' }}>
              Recipes to Explore, where Passion Meets Palate, and Every Dish is
              a Symphony of Flavors / Because Every Meal Should be an
              Experience!
            </p>
            <button className="btn btn-success shadow-sm px-4">
              <Link to="/signin" className="text-white text-decoration-none">
                Sign up
              </Link>
            </button>
            <p className="mt-2 fw-normal">
              Do you have an accout?{' '}
              <Link
                to="/login"
                className="text-success text-decoration-none fw-bold"
              >
                Log in
              </Link>
            </p>
          </div>

          <div className="col-md-6 text-center">
            <div className="img-container" style={{ maxWidth: '80%' }}>
              <img
                src={'images/ramen.png'}
                className={`${style.ramen} ramen w-100`}
                alt="ramen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
