/* eslint-disable react-hooks/exhaustive-deps */
// import Categories from "../components/Categories";
// import Veggie from "../components/Veggie";
import Popular from "../components/popular";
import React, { useEffect } from "react";
import Recent from "../components/recent";
import Categories from "../components/categories";
import Footer from "../components/Footer";
import Header from "../components/header";
import Admin from "../components/admin";
import { useSelector } from "react-redux";
import Blogs from "../components/Blogs";
// import Blogs from "../components/Blogs";

const Home = () => {
    let logedInUser = useSelector((state) => state.logedInUser.logedInUser);

    useEffect(() => {
     
    }, []);
    console.log("Home component rendered");

    return (
        <>
            <Header />
     
            {logedInUser?.isAdmin && <Admin />}
  
            <div style={{ padding: "0 1%" }}>
                {/* <Veggie /> */}
                <Popular />
                <Categories />
                <Recent />
                <Blogs />
            </div>
            <Footer />
        </>
    );
}
 
export default Home;
