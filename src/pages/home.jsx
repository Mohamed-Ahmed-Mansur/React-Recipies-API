// import Categories from "../components/Categories";
import Search from "../components/Search";
import Veggie from "../components/Veggie";
import Country from "../components/country";
import Popular from "../components/popular";
import React from "react";

const Home = () => {

    console.log("Home component rendered");

    return (
        <div>
            <Search />
            <Country />
            <Veggie />
            <Popular />
        </div>
    );
}
 
export default Home;
