import React from 'react';

export default function Landing() {
  return (
    <div id="landing">
      <div className="container-fluid mt-2 mt-sm-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">
              Daily Bites, Endless Delights: <br />
              Join Our
              <span className="text-success"> Food</span> Journey
            </h1>
            <p className="my-4" style={{ maxWidth: '590px' }}>
              Recipes to Explore, where Passion Meets Palate, and Every Dish is
              a Symphony of Flavors / Because Every Meal Should be an
              Experience!
            </p>
            <button className="btn btn-success shadow-sm px-4">Sign up</button>
            <p className="mt-2">
              Do you have an accout?{' '}
              <a href="/" className="text-success text-decoration-none fw-bold">
                Log in
              </a>
            </p>
          </div>

          <div className="col-md-6 text-center">
            <div className="img-container" style={{maxWidth:'500px'}}>
              <img src={"images/ramen.png"} className="ramen w-100" alt="ramen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
