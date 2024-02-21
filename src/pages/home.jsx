// import Categories from "../components/Categories";
import Search from "../components/Search";
import Veggie from "../components/Veggie";
import Country from "../components/country";
import Popular from "../components/popular";
import React from "react";
import Recent from "../components/recent";
import Categories from "../components/categories";
import Contact from "../components/contact";
import Footer from "../components/Footer";
import Header from "../components/header";

const Home = () => {

    console.log("Home component rendered");

    return (
        <>
            <Header />
            <div style={{ padding: "0% 5%" }}>
                <Country />
                <Veggie />
                <Popular />
                <Recent />
                <Contact />
                <Categories />
            </div>
            <Footer />
        </>
    );
}
 
export default Home;
