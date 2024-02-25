// import Categories from "../components/Categories";
// import Veggie from "../components/Veggie";
import Popular from "../components/popular";
import React from "react";
import Recent from "../components/recent";
import Categories from "../components/categories";
import Footer from "../components/Footer";
import Header from "../components/header";

const Home = () => {

    console.log("Home component rendered");

    return (
        <>
            <Header />
            <div>
                {/* <Veggie /> */}
                <Popular />
                <Categories />
                <Recent />
            </div>
            <Footer />
        </>
    );
}
 
export default Home;
