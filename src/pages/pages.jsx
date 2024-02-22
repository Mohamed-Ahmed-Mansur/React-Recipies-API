import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import React from "react";
import Signin from "./signin";
import AddRecipe from "./AddRecpie";
import Search from "../components/Search";
import Error from "../components/Error";
import Country from "../components/country";
import Categories from "../components/categories";
import FoodCat from "../components/FoodCat";

const Pages = () => {

    console.log("Pages component rendered")
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/cuisine/:country" element={<Country></Country>}></Route>
                    <Route path="/cuisine/" element={<Search />}></Route>
                    <Route path="/categories/" element={<Categories></Categories>}></Route>
                    <Route path="/cat/" element={<FoodCat></FoodCat>}></Route>
                    <Route path="/addrecpie" element={<AddRecipe />}></Route>
                    <Route path="*" element={<Error message="404 - Oops! Something went wrong." />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Pages;