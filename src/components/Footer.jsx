import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#f5f5f5", margin: "2rem 0 0 0" }}>
        <div className="d-flex align-items-start p-4 flex-wrap">
          <div className="d-flex flex-column col-md-12 col-lg-4 align-items-center ">
            <Link
              className="col-sm-12 text-center d-flex align-items-center justify-content-center "
              to={"/Home"}
              style={{
                textDecoration: "none",
                color: "black",
                marginTop: "11px",
              }}
            >
              <img
                src={"images/logo.jpg"}
                alt="Logo"
                style={{
                  color: "#1c1c1c",
                  width: "70px",
                  marginBottom: "10px",
                  marginLeft: "-30px",
                }}
              />
              <span
                style={{ fontFamily: "Lobster, sans-serif", fontSize: "1.6em" }}
              >
                Tasty <span style={{ color: "#198754" }}>Bite</span>
              </span>
            </Link>

            <div className="col-sm-12">
              <p>
                Dive into a world of diverse recipes on our website where flavor
                meets simplicity. Elevate your cooking with our expert-guided
                collection.
              </p>
              <br />
            </div>
          </div>
          <div className="d-flex col-md-11 col-lg-4 mx-md-5 mx-lg-0 p-4 mb-4">
            <div className="d-flex flex-column col-sm-4">
              <h5 className="col-sm-12">Quick links</h5>
              <Link className="Link col-sm-12" to={"/Home"}>
                <p>Home</p>
              </Link>
              <Link className="Link col-sm-12" to={"/Recipes"}>
                <p>Recipes</p>
              </Link>
              <Link className="Link col-sm-12" to={"/Blog"}>
                <p>Blog</p>
              </Link>
            </div>
            <div className="d-flex flex-column col-sm-4 mx-4">
              <h5 className="col-sm-12">Quick links</h5>
              <Link className="Link col-sm-12" to={"/ShareRecipe"}>
                <p>Share Recipe</p>
              </Link>
              <Link className="Link col-sm-12" to={"/About"}>
                <p>About Us</p>
              </Link>
              <Link className="Link col-sm-12" to={"/contact"}>
                <p>Contact Us</p>
              </Link>
            </div>
            <div className="d-flex flex-column col-sm-4">
              <h5 className="col-sm-12">Legal</h5>
              <Link className="Link col-sm-12" to={"/Terms"}>
                <p>Terms Of Use</p>
              </Link>
              <Link className="Link col-sm-12" to={"/Privacy"}>
                <p>Privacy & Cookies</p>
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column col-md-12 col-lg-4 text-center align-items-center mb-md-1">
            <br />
            <h4>Newsletter</h4>
            <p className="col-lg-8">
              Subscribe to our newsletter to get more free tips
            </p>
            <form className="col-md-10 col-lg-7 col-xl-9 col-sm-12">
              <input
                className="form-control form-control-sm my-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <input
                style={{ color: "white" }}
                className=" btn btn-success  form-control form-control-sm"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <p>&copy;2023 RecipeLogo. All Rights Reserved</p>
          </div>
          <div className="col-sm-12 col-md-4"></div>
          <div className="col-sm-12 col-md-4 d-flex justify-content-evenly">
            <Link
              style={{ color: "black" }}
              className="Link"
              to={"https://www.tiktok.com/"}
            >
              <i className="bi bi-tiktok"></i>{" "}
            </Link>
            <Link
              style={{ color: "black" }}
              className="Link"
              to={"https://www.facebook.com/"}
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              style={{ color: "black" }}
              className="Link"
              to={"https://twitter.com/"}
            >
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link
              style={{ color: "black" }}
              className="Link"
              to={"https://www.instagram.com/"}
            >
              <i className="bi bi-instagram"></i>
            </Link>
            <Link
              style={{ color: "black" }}
              className="Link"
              to={"https://www.pinterest.com/"}
            >
              <i className="bi bi-pinterest"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
