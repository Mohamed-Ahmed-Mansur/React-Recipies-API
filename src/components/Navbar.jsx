/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import style from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { setLogedInUser } from "../redux/slice/logedInUser";

export default function Navbar() {
  let logedInUser = useSelector((state) => state.logedInUser.logedInUser);
  const [isAdmin, setisAdmin] = useState(false);
  let initials = "Guest";
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (logedInUser) {
      setisAdmin(logedInUser.isAdmin);
    }
  }, []);

  console.log("Home component rendered");
  if (logedInUser) {
    console.log(logedInUser);
  } else {
    console.log("Guest");
  }
  const HandleClick = () => {
    dispatch(setLogedInUser(null));
    setisAdmin(false);
  };

  if (logedInUser) {
    initials =
      `${logedInUser.firstName[0]}${logedInUser.lastName[0]}`.toUpperCase();
  }

  return (
    <div id="navBar" style={{ position: "sticky" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="d-flex gap-2 align-items-center">
              <img
                src={"images/chef.svg"}
                alt="logo"
                style={{ color: "#1c1c1c", width: "70px" }}
                className={style.chefLogo}
              />
              <span className={style.tastyBite}>
                <span> Tasty</span>{" "}
                <span style={{ color: "#198754" }}>Bite</span>
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
            style={{ border: "none" }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`${style.navList} navbar-nav m-auto`} style={{ fontSize: "1.5rem" }}>
              <li className="nav-item px-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/cuisine">
                  Recipes
                </Link>
              </li>
              {isAdmin && (
                <li className="nav-item px-1">
                  <Link className="nav-link" to="/addrecpie">
                    Add recipe
                  </Link>
                </li>
              )}
              <li className="nav-item px-1">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center ms-auto">
            <div
              className="User d-flex align-items-center justify-content-center"
              style={{
                width: "4rem",
                height: "4rem",
                border: "4px solid #198754",
                borderRadius: "50%",
                color: "black",
                marginRight: "10px",
              }}
            >
              <p style={{ margin: "0", color: "black" }}>{initials}</p>
            </div>

            <div className="signUp d-none d-lg-block d-xl-block d-xxl-block">
              {!logedInUser && (
                <button className="btn btn-light shadow-sm me-3 px-4">
                  <Link className="nav-link" to="/login">
                    Log In
                  </Link>
                </button>
              )}
              {logedInUser && (
                <button
                  onClick={HandleClick}
                  className="btn btn-light shadow-sm me-3 px-4"
                >
                  <Link className="nav-link" to="/Home">
                    Log Out
                  </Link>
                </button>
              )}
              <button className="btn btn-success shadow-sm px-4">
                <Link className="nav-link" to="/signin">
                  Sign up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
